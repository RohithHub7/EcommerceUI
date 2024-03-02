import { Component } from '@angular/core';
import { SuggestedProducts } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  SuggestedProducts: SuggestedProducts[] = [
    {
      banerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },

    {
      banerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'laptops',
      },
    },

    {
      banerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 2,
        category: 'furniture',
        subcategory: 'chairs',
      },
    },

  ];
}
