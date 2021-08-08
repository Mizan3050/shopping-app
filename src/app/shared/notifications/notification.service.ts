import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Notification {
  display: boolean;
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notification = new BehaviorSubject<Notification>({ display: false, message: '' });
  notification$ = this.notification.asObservable();

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string) {
    this.snackBar.open(message,'', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snackbar_success'
    });
  }

}
