import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule { }
