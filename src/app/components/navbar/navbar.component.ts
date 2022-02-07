import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin: Boolean = true;


  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }

     constructor(private userService: UserService){
      // sessionStorage.setItem('username', "popo@hotmail.com");
      //CHECK IF USER HAS LOGGED IN YET
      // if(sessionStorage.getItem('username'))
      // this.userService.checkIfAdmin("popo@hotmail.com").subscribe(data => {
      //   this.isAdmin = data;
      // });
      console.log("navbar")
      console.log(sessionStorage.getItem('username'))

      // this.userService.checkIfAdmin("popo@hotmail.com").subscribe(data => {
      //   this.isAdmin = data;
      // });
     }

}
