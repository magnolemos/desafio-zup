import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRootComponent } from './app-root/app-root.component';
import { CardComponent } from './components/card/card.component';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [AppRootComponent, CardComponent, ImageComponent, InputComponent, ButtonComponent, TextComponent],
  exports: [AppRootComponent],
  imports: [
    CommonModule
  ]
})
export class DrivenUiModule { }
