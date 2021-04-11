import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataLoaded:boolean=false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
  cars:Car[]=[]
  ngOnInit(): void {
    this.getCarsByFilters()
  }

  getCarsByFilters():void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["colourId"]&&params["brandId"]){
        this.getCarsByBrandAndColour(params["brandId"],params["colourId"])
      }
      else if(params["colourId"]){
        this.getCarsByColour(params["colourId"])
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars()
      }
    })
  }
  getCars():void{
    this.carService.GetCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }
  getCarsByBrand(brandId:number):void{
    this.carService.GetCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }
  getCarsByColour(colourId:number):void{
    this.carService.GetCarsByColour(colourId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }
  getCarsByBrandAndColour(brandId:number,colourId:number):void{
    this.carService.GetCarsByColourAndBrand(brandId,colourId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }
}
