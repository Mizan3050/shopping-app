import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  public footer = new EventEmitter<boolean>();

  constructor() { }

}
