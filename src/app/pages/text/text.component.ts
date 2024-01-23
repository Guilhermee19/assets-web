import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  constructor(
    private fb: FormBuilder,
  ) {}

  form = this.fb.group({
    input: [""],
  });

  loginSubmitHandler(){
    console.log();
  }
}
