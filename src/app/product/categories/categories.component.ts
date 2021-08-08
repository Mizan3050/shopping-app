import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppApiService } from 'src/app/services/app-api.service';
import { Categories } from 'src/data/product-data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  options: FormGroup;

  Categories = Categories;

  constructor(fb: FormBuilder, private appApiService: AppApiService) {

  }

  ngOnInit(): void {
  }

}
