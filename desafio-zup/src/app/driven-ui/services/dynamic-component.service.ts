import { ComponentFactory, Injectable, Injector, NgModuleFactory, Compiler, ComponentRef } from "@angular/core";
import { BaseModule } from '../components/base-module';

@Injectable({
  providedIn: "root"
})
export class DynamicComponentService {
  constructor(private injector: Injector) {}

  getComponentBySelector(type: string, moduleLoaderFunction: () => Promise<any>): Promise<ComponentRef<any>> {
    return this.getModuleFactory(moduleLoaderFunction).then(moduleFactory => {
      const module = moduleFactory.create(this.injector);
      if (module.instance instanceof BaseModule) {
        let compFactory: ComponentFactory<any> = module.instance.getComponentFactory(type);
        if (!compFactory) {
          // TODO passar um component de erro
          console.log("Não existe  o component " + type )
           compFactory = module.instance.getComponentFactory('app-erro');
        }
        return compFactory.create(module.injector, [], null, module);
      } else {
        throw new Error('Modulo deve extender do baseModule');
      }
    });
  }

  async getModuleFactory(moduleLoaderFunction: () => Promise<NgModuleFactory<any>>) {
    const ngModuleOrNgModuleFactory = await moduleLoaderFunction();
    let moduleFactory;
    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      moduleFactory = await this.injector
        .get(Compiler)
        .compileModuleAsync(ngModuleOrNgModuleFactory);
    }
    return moduleFactory;
  }
}
