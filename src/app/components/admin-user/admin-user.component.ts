import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users = [
    {userId:1, email:"test1@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob: new Date(), phonenumber:"1234567899", address:"address"},
    {userId:2, email:"test2@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob: new Date(), phonenumber:"1234567899", address:"address"},
    {userId:3, email:"test3@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob:new Date(), phonenumber:"1234567899", address:"address"},
    {userId:4, email:"test4@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob:new Date(), phonenumber:"1234567899", address:"address"},
    {userId:5, email:"test5@hotmail.com", password:"pass", title:"Mr", firstname:"fname", lastname:"lname", dob:new Date(), phonenumber:"1234567899", address:"address"}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  delUser(id: any){
    console.log(id);
    //Call method to delete product
  }

}
