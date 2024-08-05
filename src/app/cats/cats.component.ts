import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatDetailComponent } from '../cat-detail/cat-detail.component';
import { CatService } from '../cat.service';
import { Cat } from '../interfaces/Cat';
import { CATS } from '../mock-data/mock-cats';

@Component({
  standalone: true,
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    FormsModule,
    CatDetailComponent
  ]
})
export class CatsComponent {
  constructor(private catService: CatService) { }

  cats: Cat[] = [];

  selectedCat?: Cat;

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
  }

  getCats(): void {
    this.cats = this.catService.getCats();
  }

  ngOnInit(): void {
    this.getCats();
  }

}
