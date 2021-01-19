import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrivenUiModule } from 'projects/driven-ui/src/public-api';
// import { DrivenUiModule } from 'projects/driven-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DrivenUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
