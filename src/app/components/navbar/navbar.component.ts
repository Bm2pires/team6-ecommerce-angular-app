import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { servicesVersion } from 'typescript';

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
      // sessionStorage.setItem('username', "popo@hotmail.com");
      //CHECK IF USER HAS LOGGED IN YET
      // if(sessionStorage.getItem('username'))
      // this.userService.checkIfAdmin("popo@hotmail.com").subscribe(data => {
      //   this.isAdmin = data;
      // });

      // this.userService.checkIfAdmin("popo@hotmail.com").subscribe(data => {
      //   this.isAdmin = data;
      // });

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
      if(JSON.stringify(sessionStorage.getItem("user"))){
        const user:String = JSON.stringify(sessionStorage.getItem("user"));
        var str = user;
        var splitted = str.split(",", 8);
        const admin = splitted[7]
        const adminStr = admin.substr(10);
        if(adminStr.startsWith('t')){
          this.isAdmin = true
        }else{
          this.isAdmin = false
        }
        // JSON.parse(adminStr)
        // this.isAdmin = boolValue;
      }else{
        this.isAdmin = false;
      }
    }

}
