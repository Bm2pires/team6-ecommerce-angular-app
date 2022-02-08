import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgbdCarouselBasic } from './components/landing-page/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin-prod.component';
import { ModalComponent } from './components/admin/modal-edit-prod/modal-prod.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { ModalUserComponent } from './components/admin-user/modal-edit-user/modal-user.component';
import { ModalAddUserComponent } from './components/admin-user/modal-add-user/modal-add-user.component';
import { ModalAddProdComponent } from './components/admin/modal-add-prod/modal-add-prod.component';
import { DatePipe } from '@angular/common';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductsComponent } from './components/products/products.component';
import { LoginService } from './services/login.service';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  {
    path: 'userInfo',
    component: UserInformationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'adminProds',
    component: AdminComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'adminUsers',
    component: AdminUserComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingPageComponent,
    NgbdCarouselBasic,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserInformationComponent,
    AdminComponent,
    ModalComponent,
    AdminUserComponent,
    ModalUserComponent,
    ModalAddUserComponent,
    ModalAddProdComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DatePipe, UserService, ProductService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
