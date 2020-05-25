import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponet } from './property/property-card/propety-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

@NgModule({
   declarations: [
      AppComponent,

      NavBarComponent,
      PropertyCardComponet,
      PropertyListComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
