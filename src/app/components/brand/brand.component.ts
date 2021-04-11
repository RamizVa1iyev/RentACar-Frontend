import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService:BrandService) { }
  brands:Brand[]=[]
  currentBrandId:number;
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands():void{
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  setCurrentBrand(brandId:number){
    this.currentBrandId=brandId;
  }
  getCurrentColourClass(brandId:number){
    if(brandId===this.currentBrandId){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
