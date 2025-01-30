import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from 'src/app/modules/our-services/our-services/our-services.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {
    path: 'bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'documentation-service/:id', component: OurServicesComponent,
  },
  {
    path: 'family-creation/:id', component: OurServicesComponent,
  },
  {
    path: 'landscape-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'structure-bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'steel-structure-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'rebar-detailing/:id', component: OurServicesComponent,
  },
  {
    path: 'clash-detection/:id', component: OurServicesComponent,
  },
  {
    path: 'mechanical-bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'electrical-bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'plumbing-bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'mep-documentation/:id', component: OurServicesComponent,
  },
  {
    path: 'cad-documentation/:id', component: OurServicesComponent,
  },
  {
    path: 'cad-detailing/:id', component: OurServicesComponent,
  },
  {
    path: 'pdf-to-cad/:id', component: OurServicesComponent,
  },
  {
    path: 'permit-sets/:id', component: OurServicesComponent,
  },
  {
    path: 'bim-interior-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'interior-documentation/:id', component: OurServicesComponent,
  },
  {
    path: 'joinery-design/:id', component: OurServicesComponent,
  },
  {
    path: 'quantity-takeoff/:id', component: OurServicesComponent,
  },
  {
    path: 'scan-to-bim/:id', component: OurServicesComponent,
  },
  {
    path: 'scan-to-cad/:id', component: OurServicesComponent,
  },
  {
    path: 'scan-to-structure-mep/:id', component: OurServicesComponent,
  },
  {
    path: 'as-built-bim/:id', component: OurServicesComponent,
  },
  {
    path: '3d-architectural-rendering/:id', component: OurServicesComponent,
  },
  {
    path: 'animation-walkthrough/:id', component: OurServicesComponent,
  },
  {
    path: 'interior-rendering/:id', component: OurServicesComponent,
  },
  {
    path: 'vr-visualization/:id', component: OurServicesComponent,
  },
  {
    path: 'revit-bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'archicad-bim-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'sketchup-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'vectorworks-modelling/:id', component: OurServicesComponent,
  },
  {
    path: 'chief-architect-modelling/:id', component: OurServicesComponent,
  },
  {
    path: '**', component: ErrorpageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModulesRoutingModule { }
