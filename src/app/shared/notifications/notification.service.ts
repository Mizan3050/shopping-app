import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
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
      duration: 1200,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snackbar_success'
    });
  }

}
