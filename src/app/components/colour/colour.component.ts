import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  constructor(private colourService:ColourService) { }
  colours:Colour[]=[]
  currentColourId:number=0;
  ngOnInit(): void {
    this.getColours()
  }
  getColours():void{
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data
    })
  }
  setCurrentColour(colourId:number){
    this.currentColourId=colourId;
  }
  getCurrentColourClass(colourId:number){
    if(colourId===this.currentColourId){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
