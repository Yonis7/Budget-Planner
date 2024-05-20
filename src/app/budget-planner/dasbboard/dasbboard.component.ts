import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dasbboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dasbboard.component.html',
  styleUrl: './dasbboard.component.scss',
})
export class DasbboardComponent {
  // The following variables are used to display the income of the user.
  LastMonthsIncome = ['January: $1000', 'February: $2000', 'March: $3000'];
  currentMonthIncome = '$1000';

  //Expense of the user is displayed using the following variables.
  LastMonthsExpense = ['January: $500', 'February: $1000', 'March: $1500'];
  currentMonthExpense = '$500';

  // The purpose of this constructor is to navigate to the income page. It is done by injecting the Router module.
  constructor(public router: Router) {}

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }
  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
}
