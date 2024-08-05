import { Component, Input } from '@angular/core';
import { Cat } from '../interfaces/Cat';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrl: './cat-detail.component.css',
  imports: [CommonModule, FormsModule]
})
export class CatDetailComponent {
  @Input() cat?: Cat;

}
