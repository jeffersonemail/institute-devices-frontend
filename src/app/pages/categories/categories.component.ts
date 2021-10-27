import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  mock: boolean = true;

  categories: Category[] = [
    {
        "Id": 1,
        "Name": "Celular"
    },
    {
        "Id": 2,
        "Name": "Computador"
    },
    {
        "Id": 3,
        "Name": "Notebook"
    },
    {
        "Id": 4,
        "Name": "Tablet"
    }
];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      if (!this.mock) {
        this.categories = categories;
      }
    });
  }
}