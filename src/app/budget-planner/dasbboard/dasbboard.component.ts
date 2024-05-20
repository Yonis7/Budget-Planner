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

  //Upcoming expenses are displayed using the following variables.
  upcomingExpenses = [
    { description: 'Pay Rent', amount: '$500', date: '01/04/2021' },
    { description: 'Buy Groceries', amount: '$100', date: '05/04/2021' },
    { description: 'Pay Bills', amount: '$200', date: '10/04/2021' },
    { description: 'Buy Clothes', amount: '$100', date: '15/04/2021' },
  ];

  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;

  // The purpose of this constructor is to navigate to the income page. It is done by injecting the Router module.
  constructor(public router: Router) {}

  // This method is executed when the user clicks on the button to view the income.
  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }
  // This method is executed when the user clicks on the button to view the expenses.
  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
  // This method is executed when the user clicks on the button to view the upcoming expenses.
  onUpcoming() {
    this.router.navigate(['/budget-planner/upcoming']);
  }
  // gettter method to calculate the savings of the user. It is calculated by subtracting the total current month income from the total current month expense.
  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
