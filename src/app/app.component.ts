import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assets-web';

  adicionarBrilho = false;
  brilhoStyle: { top: string, left: string } = { top: '0', left: '0' };

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.adicionarBrilho) {
      this.brilhoStyle.top = `${event.clientY}px`;
      this.brilhoStyle.left = `${event.clientX}px`;
    }
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.adicionarBrilho = true;
    this.onMouseMove(event); // Atualiza a posição do brilho imediatamente ao entrar
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    this.adicionarBrilho = false;
  }

}
