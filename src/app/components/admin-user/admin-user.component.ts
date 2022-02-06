import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  // users = [
  //   {userId:1, email:"test1@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob: new Date(), phonenumber:"1234567899", address:"address", isadmin:false},
  //   {userId:2, email:"test2@hotmail.com", password:"pass", title:"Mrs", firstname:"fname", lastname:"lname", dob: new Date(), phonenumber:"1234567899", address:"address", isadmin:false},
  //   {userId:3, email:"test3@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob:new Date(), phonenumber:"1234567899", address:"address", isadmin:false},
  //   {userId:4, email:"test4@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob:new Date(), phonenumber:"1234567899", address:"address", isadmin:false},
  //   {userId:5, email:"test5@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob:new Date(), phonenumber:"1234567899", address:"address", isadmin:false}

  // ];

  users!: UserDetails[];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  delUser(id: any){
    console.log(id);
    this.userService.delUser(id).subscribe(data => {
      console.log(data)
    });
    this.ngOnInit();  }

}
