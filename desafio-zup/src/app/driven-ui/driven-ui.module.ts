import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRootComponent } from './app-root/app-root.component';
import { DynamicSelectorComponent } from './dynamic-selector/dynamic-selector.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppRootComponent, DynamicSelectorComponent],
  exports: [AppRootComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DrivenUiModule  {
}
