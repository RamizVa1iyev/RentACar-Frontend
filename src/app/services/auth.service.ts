import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailResponseModel } from '../models/detailResponseModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { UserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl='https://localhost:44364/api/auth';
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel): Observable<DetailResponseModel<TokenModel>> {
    return this.httpClient.post<DetailResponseModel<TokenModel>>(
      this.apiUrl + '/login',
      loginModel
    );
  }
  register(registerModel:RegisterModel): Observable<DetailResponseModel<TokenModel>> {
    return this.httpClient.post<DetailResponseModel<TokenModel>>(
      this.apiUrl + '/register',
      registerModel
    );
  }
  getUserInfo():Observable<DetailResponseModel<UserInfo>>{
    return this.httpClient.get<DetailResponseModel<UserInfo>>(this.apiUrl+"/getuserinfo")
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('token')!=null) {
      return true;
    } else {
      return false;
    }
  }
}
