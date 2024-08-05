import { Injectable } from '@angular/core';
import { Cat } from './interfaces/Cat'
import { CATS } from './mock-data/mock-cats';

@Injectable({
  providedIn: 'root'
})

export class CatService {

  constructor() { }

  getCats(): Cat[] {
    return CATS;
  }
}
