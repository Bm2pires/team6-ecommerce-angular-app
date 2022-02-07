import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isAdmin: Boolean = false;
  isLoggedIn = false;



  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }

     constructor(private userService: UserService, private loginService: LoginService, private navService: NavbarService){
      this.navService.invokeEvent.subscribe(value => {
        if(value === 'someVal'){
         this.isUserLoggedIn();
       }
      })

     }
  ngOnInit(): void {
    this.isUserLoggedIn();
  }

     logout() {
       this.loginService.logout();
       this.ngOnInit();
       this.isLoggedIn = false;
       this.isAdmin = false;
     }

     isUserLoggedIn() {
     const loggedIn = this.loginService.isUserLoggedIn();
     if(loggedIn){
      this.isUserAdmin()
       this.isLoggedIn = true;
     }else{
      this.isLoggedIn = false;
    }
    }

    isUserAdmin(){
      const user = JSON.parse(sessionStorage.getItem("user")!)
      if(user != null){
        this.isAdmin = user.admin;
      }else{
        this.isAdmin = false;
      }
    }

}
