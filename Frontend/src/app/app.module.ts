import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponet } from './property/property-card/propety-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';

const appRoutes : Routes = [
  { path: '', component : PropertyListComponent},
  { path: 'add-property', component : AddPropertyComponent}
]

@NgModule({
   declarations: [
      AppComponent,

      NavBarComponent,
      PropertyCardComponet,
      PropertyListComponent,
      AddPropertyComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
     HousingService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
