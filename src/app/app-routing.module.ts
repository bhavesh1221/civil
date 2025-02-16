import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ContactComponent } from './modules/home/contact/contact.component';
import { AboutusComponent } from './modules/home/aboutus/aboutus.component';

const routes: Routes = [
 {
  path: 'home', component: HomeComponent,
 },
//  {
//   path: 'contact' , component: ContactComponent
//  },
//  {
//   path: 'aboutus', component: AboutusComponent
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
