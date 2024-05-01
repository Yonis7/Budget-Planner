import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-dasbboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent],
  templateUrl: './dasbboard.component.html',
  styleUrl: './dasbboard.component.scss'
})
export class DasbboardComponent {

}
