import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

type ContactForm = FormGroup;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  sent = false;
  form: ContactForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submit(): void {
    this.sent = false;
    if (this.form.invalid) return;
    this.sent = true;
    this.form.reset();
  }
}
