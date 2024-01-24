import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    input: [''],
  });

  ignore: string[] = [
    'a',
    'o',
    'as',
    'os',
    'de',
    'dos',
    'das',
    'do',
    'da',
    'e',
    'ou',
    'para',
    'por',
    'no',
    'na',
    'nos',
    'nas',
  ];

  loginSubmitHandler(event: any) {
    const action = event.submitter.innerText;

    const input = (this.form.get('input')?.value || '')?.toLowerCase();

    if (action === 'MAIÚSCULO') {
      this.form.patchValue({ input: input?.toUpperCase() });
    }

    if (action === 'minusculo') {
      this.form.patchValue({ input: input?.toLowerCase() });
    }

    if (action === 'Inverter') {
      this.form.patchValue({ input: input?.split('').reverse().join('') });
    }

    if (action === 'Primeira Letra') {
      const words = input?.split(' ');
      const capitalizedWords = words?.map((word) => {
        if (this.ignore.includes(word)) {
          return word;
        } else return word.charAt(0).toUpperCase() + word.slice(1);
      });
      this.form.patchValue({ input: capitalizedWords?.join(' ') });
    }

    if (action === 'Primeira palavra') {
      this.form.patchValue({
        input: input?.charAt(0).toUpperCase() + input?.slice(1),
      });
    }
  }
}
