import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing';

import { exComponent } from "./examples/example.component";
import { errorComponent } from "./examples/error.component";

@NgModule({
  declarations: [
    AppComponent, exComponent, errorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(AppRoutes), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
