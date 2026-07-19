import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  showPassword = false;

  constructor(private router: Router) {}

  signIn(): void {

    if (!this.email.trim() || !this.password.trim()) {

      alert('Please enter Email and Password');
      return;

    }

    this.router.navigateByUrl('/home');

  }

  continueAsGuest(): void {

    this.router.navigateByUrl('/home');

  }

  togglePassword(): void {

    this.showPassword = !this.showPassword;

  }

}