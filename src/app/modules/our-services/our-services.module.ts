import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { SharedModulesModule } from 'src/app/shared/shared-modules/shared-modules.module';
// import { HeaderComponent } from 'src/app/shared/components/header/header/header.component';


@NgModule({
  declarations: [
    OurServicesComponent,
    
  ],

  imports: [
    CommonModule,
    OurServicesRoutingModule,
    SharedModulesModule
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ],

})
export class OurServicesModule { }
