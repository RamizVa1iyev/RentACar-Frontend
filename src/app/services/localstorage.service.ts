import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  create(key:string,value:string){
    localStorage.setItem(key,value);
  }
  update(key:string,value:string){
    this.delete(key)
    this.create(key,value)
  }
  delete(key:string){
    localStorage.removeItem(key)
  }
  get(key:string){
    localStorage.getItem(key)
  }
  clear(){
    localStorage.clear()
  }
}
