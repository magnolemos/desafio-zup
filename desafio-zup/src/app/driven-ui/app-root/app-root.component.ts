import { AfterViewInit, Component, ComponentRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

import { DynamicSelectorComponent } from '../dynamic-selector/dynamic-selector.component';
import { DynamicComponentService } from '../services/dynamic-component.service';

export interface DynamicContentProperties { [k: string]: any; };

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent implements AfterViewInit, OnInit {

  components!: Array<Object>;

  @Input() layout: any;

  @ViewChildren('viewRef', {read: DynamicSelectorComponent})
  viewRefs!: QueryList<DynamicSelectorComponent>;


  @ViewChild("container", { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  showComponent = false;
  
  constructor(private componentService: DynamicComponentService) {}
  ngOnInit(): void {
    this.components = [this.layout]
  }

  ngAfterViewInit() {
    this.viewRefs.changes.subscribe((list: QueryList<DynamicSelectorComponent>) => {
      list.forEach((viewRef: DynamicSelectorComponent, index: number) => {
        viewRef.properties.children?.map((property: DynamicContentProperties) => {
          this.componentService
          .getComponentBySelector(property?.type, () => import("../components/components.module").then(m => m.ComponentsModule))
            .then(componentRef => {
              viewRef.component.instance.containerComponent.insert(componentRef.hostView) 
              this.addComponentProperties(componentRef,property);
              if (componentRef.instance?.children) this.renderChildren(componentRef.instance?.children, componentRef)
            });
        });
      });
    });
  }

  renderChildren(children: Array<DynamicContentProperties>, parentComponentRef: ComponentRef<any> | DynamicSelectorComponent) {
    children?.map((child: DynamicContentProperties) => {
      this.componentService
    .getComponentBySelector(child?.type, () => import("../components/components.module").then(m => m.ComponentsModule))
      .then(componentRefChild => {
        (<any>parentComponentRef).instance?.containerComponent.insert(componentRefChild.hostView) 
        this.addComponentProperties(componentRefChild,child);
        if(componentRefChild?.instance?.children) {
          this.renderChildren(componentRefChild?.instance?.children, componentRefChild)
        }
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

