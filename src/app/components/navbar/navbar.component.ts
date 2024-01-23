import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() colapse: 'vertical' | 'horizontal' = 'vertical';
  @ViewChild('navbar') navbar: ElementRef<HTMLElement> | undefined;

  constructor() {}

  loading = false;

  navbar_hidden = true;
  scroll = false;
  navbar_height = 0;

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scroll = window.scrollY;
    this.scroll = scroll > 200;

    setTimeout(() => {
      if (this.navbar) {
        this.navbar_height = this.navbar.nativeElement.offsetHeight;
      }
    }, 300);
  }
}
