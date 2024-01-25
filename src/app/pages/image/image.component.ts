import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  constructor(private fb: FormBuilder) {}

  image_form = this.fb.group({
    link: ['iamgui.dev'],
  });
}
