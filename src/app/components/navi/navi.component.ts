import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isAuthenticated:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated=this.authService.isAuthenticated()
  }

}
