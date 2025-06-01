import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from 'src/app/shared/components/header/header/header.component';
import { SharedModulesModule } from 'src/app/shared/shared-modules/shared-modules.module';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModulesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule { }
