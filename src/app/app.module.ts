import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgbdCarouselBasic } from './components/landing-page/carousel/carousel.component';
import { NgbCarouselModule, NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NgbdCarouselBasic,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
