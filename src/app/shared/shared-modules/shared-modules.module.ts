import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { HeaderComponent } from './header/header.component';
import { HoverDirective } from './directives/hover.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    HoverDirective
  ],
  exports : [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
