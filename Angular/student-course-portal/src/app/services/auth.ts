import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  // Hardcoded login status for Hands-On
  isLoggedIn = true;

  constructor() { }

}