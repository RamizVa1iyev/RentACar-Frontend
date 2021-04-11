import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl:string='https://localhost:44364/api/carImages'
  constructor(private httpClient:HttpClient) { }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let getCarImagesByCarId = `${this.apiUrl}/getByCar/${carId}`
    return this.httpClient.get<ListResponseModel<CarImage>>(getCarImagesByCarId)
  }
}
