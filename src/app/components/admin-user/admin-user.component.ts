import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/interfaces/userDetails';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent implements OnInit {
  users!: UserDetails[];
  notice: String = "";

  constructor(private userService: UserService) {}

  //Gets useers from db
  ngOnInit(): void {
    this.userService.findAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  //Deletes user
  delUser(id: any) {
    this.userService.delUser(id).subscribe(response => {

    }, err => {
      //handle errors here
      if(err.status != 200){
        this.notice = "Deletion Unsuccesfull. User may have an active orders which is preventing deletion"
      }else{
        this.notice = "Deletion Succesfull"
      }
  });

    setTimeout(()=>{
      this.ngOnInit();
      this.notice = "";
    }, 1500)
  }

  relaod(message: String){
    this.notice = message;
    setTimeout(()=>{
      this.ngOnInit();
      this.notice = "";
    }, 1500)
  }
}
