import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRootComponent } from './app-root/app-root.component';

@NgModule({
  declarations: [AppRootComponent],
  exports: [AppRootComponent],
  imports: [
    CommonModule
  ]
})
export class DrivenUiModule { }
