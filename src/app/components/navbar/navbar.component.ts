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
  //Checks if user is admin
  isAdmin: Boolean = false;
  //Checks if user is logged in
  isLoggedIn = false;



  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }

     constructor(private userService: UserService, private loginService: LoginService, private navService: NavbarService){
       //Used to connect to login component - When user logs in this function will be called after going through navbar.service.ts (login -> navbar.service.ts -> navbar.component.ts)
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

     //Cheks if user is logged in and also calls method to chek if user is admin
     isUserLoggedIn() {
     const loggedIn = this.loginService.isUserLoggedIn();
     if(loggedIn){
      this.isUserAdmin()
       this.isLoggedIn = true;
     }else{
      this.isLoggedIn = false;
    }
    }

    //Checks if user is admin
    isUserAdmin(){
      const user = JSON.parse(sessionStorage.getItem("user")!)
      if(user != null){
        this.isAdmin = user.admin;
      }else{
        this.isAdmin = false;
      }
    }

}
