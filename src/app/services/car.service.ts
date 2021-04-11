import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:string='https://localhost:44364/api/cars'
  constructor(private httpClient:HttpClient) { }
  GetCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
  GetCarById(carId:number):Observable<DetailResponseModel<Car>>{
    let getByIdUrl=`${this.apiUrl}/${carId}`
    return this.httpClient.get<DetailResponseModel<Car>>(getByIdUrl);
  }
  GetCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let getCarsByBrandUrl = this.apiUrl+"/getByBrand/"+brandId
    return this.httpClient.get<ListResponseModel<Car>>(getCarsByBrandUrl);
  }
  GetCarsByColour(colourId:number):Observable<ListResponseModel<Car>>{
    let getCarsByBrandUrl = this.apiUrl+"/getByColour/"+colourId
    return this.httpClient.get<ListResponseModel<Car>>(getCarsByBrandUrl);
  }
  GetCarsByColourAndBrand(brandId:number,colourId:number):Observable<ListResponseModel<Car>>{
    let getCarsByBrandUrl = `${this.apiUrl}/getByColourAndBrand?brandId=${brandId}&&colourId=${colourId}`
    return this.httpClient.get<ListResponseModel<Car>>(getCarsByBrandUrl);
  }
}
