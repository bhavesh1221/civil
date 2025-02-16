import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { HeaderComponent } from './header/header.component';
import { HoverDirective } from './directives/hover.directive';
import { ContentImgComponent } from './content-img/content-img.component';
import { CardsComponent } from './cards/cards.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooterComponent } from '../components/footer/footer/footer.component';
import { OursoftwareExpertiseComponent } from './oursoftware-expertise/oursoftware-expertise.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HoverDirective,
    ContentImgComponent,
    CardsComponent,
    ErrorpageComponent,
    FooterComponent,
    OursoftwareExpertiseComponent,

  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    ContentImgComponent,
    CardsComponent,
    OursoftwareExpertiseComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
