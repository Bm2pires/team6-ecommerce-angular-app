import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/interfaces/userDetails';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent implements OnInit {
  users!: UserDetails[];

  constructor(private userService: UserService) {}

  //Gets useers from db
  ngOnInit(): void {
    this.userService.findAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  //Deletes user
  delUser(id: any) {
    console.log(id);
    this.userService.delUser(id).subscribe((data) => {
    });
    this.ngOnInit();
  }
}
