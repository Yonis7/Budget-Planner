import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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

  // Function to toggle the slide out. Inside the function, we are setting the value of isSlideOut to the opposite of its current value. This will make the side nav slide in and out when the button is clicked.
  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

}
