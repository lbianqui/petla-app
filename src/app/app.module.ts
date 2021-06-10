import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RefugiosComponent } from './pages/refugios/refugios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdoptaComponent } from './pages/adopta/adopta.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RefugiosComponent,
    AdoptaComponent,
    TitleSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
