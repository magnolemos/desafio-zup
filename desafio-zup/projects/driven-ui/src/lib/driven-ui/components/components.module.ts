import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';
import { BaseModule } from './base-module';
import { BaseComponent } from './base/base.component';
import { ErroComponent } from './erro/erro.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [CardComponent, ImageComponent, InputComponent, ButtonComponent, TextComponent, BaseComponent, ErroComponent, ContainerComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule extends BaseModule { 
  dynamicComponents = [CardComponent, ImageComponent, InputComponent, ButtonComponent, TextComponent, ErroComponent, ContainerComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
