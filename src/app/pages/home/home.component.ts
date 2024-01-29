import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  today: Date = new Date;

  ngOnInit(){
    this.atualizarRelogio();
    setInterval(() => this.atualizarRelogio(), 1000);
  }

  atualizarRelogio() {
    this.today = new Date();
  }
}
