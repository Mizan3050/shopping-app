import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayNotification = false;
  displayText = 'Success'
  notification$ = this.notificationService.notification$;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    
  }

}
