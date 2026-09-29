import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidEmailPipe } from '../valid-email/valid-email-pipe';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ValidEmailPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.loginForm.value); // { email: '...', password: '...' }
  }
}