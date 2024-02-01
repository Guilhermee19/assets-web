import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfigNotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component  {

  constructor(private fb: FormBuilder,
    private notifier: ConfigNotifierService) {}

  loading = false;

  image_form = this.fb.group({
    base64: '',
    image: '',
  });

  selectedFiles: any[] = [];
  right_to_left = true;

  convertSubmitHandler(){
    const base64 = this.image_form.get('base64')?.value;
    const image = this.image_form.get('image')?.value;

    if(this.right_to_left) this.image_form.patchValue({base64: image});
    else this.image_form.patchValue({image: base64});
  }

  reset(){
    this.right_to_left = !this.right_to_left;
    this.image_form.reset()
  }

  handleFileUpload(file: string, formControlName: string) {
    console.log(file);
    this.image_form.get(formControlName)?.setValue(file);
  }

  copiarParaClipboard(): void {
    const textarea = document.createElement('textarea');
    textarea.value = this.image_form.get('base64')?.value || '';

    if(!textarea.value) return;

    document.body.appendChild(textarea);

    // Seleciona o conteúdo do textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Executa o comando de cópia
    document.execCommand('copy');

    // Remove o textarea do DOM
    document.body.removeChild(textarea);

    this.notifier.info('Copiado!')
  }

}
