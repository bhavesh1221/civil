import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from 'src/app/modules/our-services/our-services/our-services.component';

const routes: Routes = [
  // {
  //   path: 'our-services', component: OurServicesComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModulesRoutingModule { }
