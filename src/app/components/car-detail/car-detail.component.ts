import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car;
  carImages:CarImage[]=[];
  constructor(private carService:CarService,private carImageService:CarImageService ,private activeRoute:ActivatedRoute,private sanitizier:DomSanitizer) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"])
        this.getCarImagesById(params["carId"])
      }
    })
  }
  getCarById(carId:number):void{
    this.carService.GetCarById(carId).subscribe(response=>{
      this.car=response.data
    })
  }
  getCarImagesById(carId:number):void{
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }
  getImgPath(imagePath:string){
    return this.sanitizier.bypassSecurityTrustResourceUrl(imagePath)
  }
}
