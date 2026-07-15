import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  // Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-Way Binding
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  /*
    [property] is one-way binding (Component → DOM)

    [(ngModel)] is two-way binding (Component ↔ DOM)

    Changes in either the component or the input field
    automatically update the other.
  */

  // Lifecycle Hook - called once after component is initialized
  ngOnInit(): void {
    console.log('HomeComponent initialized - courses loaded');
  }

  // Lifecycle Hook - called just before component is destroyed
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

}