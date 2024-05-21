import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss',
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;

  januaryIncomes = [
    { source: 'Salary', amount: 2000, investments: 500 },
    { source: 'Bonus', amount: 500, investments: 100 },
  ];
  februaryIncomes = [
    { source: 'Salary', amount: 2500, investments: 500 },
    { source: 'Bonus', amount: 600, investments: 100 },
  ];
  marchIncomes = [
    { source: 'Salary', amount: 3000, investments: 500 },
    { source: 'Bonus', amount: 700, investments: 100 },
  ];
  monthSelected:boolean = false;
  // The purpose of this constructor is to initialize the selectedMonth variable with the current month. It is done by getting the current date and extracting the month from it.
  constructor(public fb: FormBuilder) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }

  // This method is executed when the user submits the form. It is used to save the income details entered by the user.
  ngOnInit() {
    // Define the form structure and validation rules
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],
    });
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.getFilteredIncomes();
  }
  // This method is used to calculate the total income for the selected month. It is done by iterating over the incomes for the selected month and summing up the amount.
  calculateTotalIncome(month: string): number {
    // Calculate the total income for the selected month, initialized to 0
    let totalIncome = 0;

    // Iterate over the incomes for the selected month and sum up the amount
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }

    // Return the total income to update the UI
    return totalIncome;
  }

  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      default:
        return [];
    }
  }

  getFilteredIncomes() {
    // Get the filtered income based on the selected month
    let filteredIncomes: any[] = [];

    // This switch statement is used to filter the income based on the selected month, by setting the filteredIncomes variable to the corresponding month's income.
    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = this.januaryIncomes;
        break;
      case 'February':
        filteredIncomes = this.februaryIncomes;
        break;
      case 'March':
        filteredIncomes = this.marchIncomes;
        break;
    }
  }

  onSubmit() {
    console.log(this.incomeForm.value);
  }
}
