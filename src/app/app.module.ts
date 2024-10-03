import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { HomeModule } from './modules/home/home.module';
import { FooterComponent } from './shared/components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
