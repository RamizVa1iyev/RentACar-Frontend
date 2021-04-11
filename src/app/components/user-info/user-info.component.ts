import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/models/userInfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo:UserInfo;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo():void{
    this.authService.getUserInfo().subscribe(response=>{
      this.userInfo=response.data;
    })
  }
}
