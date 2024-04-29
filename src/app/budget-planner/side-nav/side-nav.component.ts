import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule,],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  // Set the initial value of the slide out to true, this will make the side nav visible when the page loads
  isSlideOut = true;

  constructor(private router: Router) { }

  // Function to toggle the slide out. Inside the function, we are setting the value of isSlideOut to the opposite of its current value. This will make the side nav slide in and out when the button is clicked. Void is used to indicate that the function does not return anything. It does not affect the functionality of the function.
  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDash() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }
  onHistory() {
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout() {
    this.router.navigate(['/login']);
  }

}
