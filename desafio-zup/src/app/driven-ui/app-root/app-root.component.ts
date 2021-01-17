import { AfterViewInit, Component, ComponentRef, Input, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

import { DynamicSelectorComponent, Properties } from '../dynamic-selector/dynamic-selector.component';
import { DynamicComponentService } from '../services/dynamic-component.service';

export interface DynamicContentProperties { [k: string]: any; };

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent implements AfterViewInit {

  components = [
    { type: 'app-card', description: 'card com filhos', url: "https://www.petlove.com.br/images/breeds/193436/profile/original/beagle-p.jpg",
      value: "1111111",
      children: [
          { type: 'app-button', description: 'input' },
          { type: 'app-text', description: 'input2'}
        ]
    },
    { type: 'app-dynamic1', description: 'input'}
  ]

  @Input() layout: any;

  @ViewChildren('viewRef', {read: DynamicSelectorComponent})
    public viewRefs!: QueryList<DynamicSelectorComponent>;


  @ViewChild("container", { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  showComponent = false;
  
  constructor(private componentService: DynamicComponentService) {}

  // verificar a mudanca na view, se tiver filhos add os filhos tb
  ngAfterViewInit() {
    this.viewRefs.changes.subscribe((list: QueryList<DynamicSelectorComponent>) => {
      list.forEach((viewRef: DynamicSelectorComponent, index: number) => {

        // verifica os inputs passado como propriedade, se tiver children add eles
        viewRef.properties.children?.map((property: DynamicContentProperties) => {
        
          this.componentService
          .getComponentBySelector(property?.type, () => import("../components/components.module").then(m => m.ComponentsModule))
          .then(componentRef => {
            viewRef.component.instance.containerComponent.insert(componentRef.hostView) 
            this.addComponentProperties(componentRef,property)
          });

        });
      });
  });
  }

  getModuleLoader() {
    return () =>
    import("../components/components.module").then(m => m.ComponentsModule);
  }

  addComponentProperties(componentRef: ComponentRef<any>, properties: DynamicContentProperties) {
    if (componentRef && componentRef.instance && properties) {
      Object.keys(properties).forEach(p => (componentRef.instance[p] = properties[p]));
    }
  }
}

