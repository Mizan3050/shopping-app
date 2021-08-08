import { Component, OnInit } from '@angular/core';
import { AppApiService } from '../services/app-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  flag = false;
  constructor(private appApiService: AppApiService) { }

  ngOnInit(): void {
    this.appApiService.footer.subscribe((value) => {
      this.flag = true; 
   })
  }

}
