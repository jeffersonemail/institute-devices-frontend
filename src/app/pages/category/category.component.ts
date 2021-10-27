import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  mock: boolean = true;
  
  category = {
    "Id": 1,
    "Name": "Celular"
  } as Category;

  constructor(private deviceService: CategoryService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getCategoryById(this.route.snapshot.params["id"]);
  }

  getCategoryById(id: number) {
    this.deviceService.getCategoryById(id).subscribe((category) => {
      if (!this.mock) {
        this.category = category as Category;
      }
    });
  }

}
