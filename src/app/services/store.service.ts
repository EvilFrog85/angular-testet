import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  isOk: boolean = true;

  constructor() { 
    this.isOk = localStorage.getItem('isOk') == "true";
  }

  setIsOk(isOk: boolean) {
    this.isOk = isOk;
    localStorage.setItem('isOk', this.isOk.toString());
  }
  getIsOk(): boolean {
    return this.isOk;
  }
}
