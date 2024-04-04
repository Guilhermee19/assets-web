import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  now = interval(1000).pipe(
    map(() => {
      return new Date();
    })
  );
}
