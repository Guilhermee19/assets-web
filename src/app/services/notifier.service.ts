import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class ConfigNotifierService {
  constructor(private notifier: NotifierService) {}

  error(message: string) {
    console.log(message);
    this.notifier.notify('error', message);
  }

  info(message: string) {
    console.log(message);
    this.notifier.notify('info', message);
  }

  success(message: string) {
    console.log(message);
    this.notifier.notify('success', message);
  }
}
