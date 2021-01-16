import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrivenUiModule } from './driven-ui/driven-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DrivenUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
