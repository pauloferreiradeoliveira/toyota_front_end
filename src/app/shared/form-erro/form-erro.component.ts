import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-erro',
  templateUrl: './form-erro.component.html',
  styleUrls: ['./form-erro.component.sass']
})
export class FormErroComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() valor: string;
  @Input() campo: string;

  constructor() { }

  ngOnInit() {
  }

  hasError() {
    return this.form.get(this.campo).errors;
  }

}
