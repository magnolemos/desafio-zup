import { ComponentRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

import { DynamicComponentService } from '../services/dynamic-component.service';

export interface Properties { [k: string]: any; };

@Component({
  selector: 'app-dynamic-selector',
  template: `
  <ng-container #componentContainer>
    <ng-content></ng-content>
  </ng-container>
  `
})
export class DynamicSelectorComponent implements OnDestroy, OnChanges {
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input() type!: string;
  @Input() moduleLoaderFunction!: any;
  @Input() properties!: Properties;

  public component!: ComponentRef<any>;

  constructor(private componentService: DynamicComponentService) { }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      await this.renderComponentInstance();
      this.setComponentInputs();
    } else if (changes.inputs) {
      this.setComponentInputs();
    }
  }

  ngOnDestroy() {
    this.destroyComponentInstance();
  }

  private async renderComponentInstance() {
    this.destroyComponentInstance();

    this.component = await this.componentService.getComponentBySelector(this.type, this.moduleLoaderFunction);
    this.container.insert(this.component.hostView); 
  }

  private setComponentInputs() {
    if (this.component && this.component.instance && this.properties) {
      Object.keys(this.properties).forEach(p => (this.component.instance[p] = this.properties[p]));
    }
  }

  private destroyComponentInstance() {
    if (this.component) {
      this.component.destroy();
      this.component = null as any;
    }
  }
}
