import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from 'src/app/modules/our-services/our-services/our-services.component';

const routes: Routes = [
  {
    path: 'bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'documentation-service/:id', component: OurServicesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModulesRoutingModule { }
