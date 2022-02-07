import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
      sessionStorage.setItem('username', "popo@hotmail.com");
      this.userService.checkIfAdmin("popo@hotmail.com").subscribe(data => {
        this.isAdmin = data;
      });
     }

}
