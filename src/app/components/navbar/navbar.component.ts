import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() colapse: 'vertical' | 'horizontal' = 'vertical';
  @ViewChild('navbar') navbar: ElementRef<HTMLElement> | undefined;

  loading = false;

  navbar_hidden = true;
  scroll = false;
  navbar_height = 0;
}
