import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { AppApiService } from 'src/app/services/app-api.service';
import { Categories } from 'src/data/product-data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  options: UntypedFormGroup;

  Categories = Categories;

  constructor(fb: UntypedFormBuilder, private appApiService: AppApiService) {

  }

  ngOnInit(): void {
  }

}
