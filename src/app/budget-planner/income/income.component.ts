// Import necessary Angular modules and services
import { CommonModule } from '@angular/common'; // Provides common directives like NgIf, NgFor, etc
import { Component } from '@angular/core'; // Allows creation of a component
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; // For building and managing forms
import { Router } from '@angular/router'; // For navigation between routes

// Define the component
@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent {
  incomeForm: any; // Property to hold the form group
  selectedMonth: any; // Property to hold the selected month

  // Sample income data for different months
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

  monthSelected: boolean = false; // Flag to check if a month is selected

  // Constructor initializes the form builder and sets the selected month to the current month
  constructor(public fb: FormBuilder, public router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }

  // Initialize the form when the component is initialized
  ngOnInit() {
    // Define the form structure and validation rules
    this.incomeForm = this.fb.group({
      month: ['', Validators.required], // A required field for the month
      source: ['', Validators.required], // A required field for the income source
      amount: ['', Validators.required], // A required field for the amount
      investments: ['', Validators.required], // A required field for investments
    });
  }

  // Method to handle changes in the selected month dropdown
  onChange(event: any) {
    this.selectedMonth = event.target.value; // Update the selected month
    this.monthSelected = true; // Set monthSelected to true
    this.getFilteredIncomes(); // Filter incomes based on the selected month
  }

  // Method to calculate the total income for the selected month
  calculateTotalIncome(month: string): number {
    let totalIncome = 0; // Initialize total income to 0

    // Iterate over the incomes for the selected month and sum up the amounts
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }

    // Return the total income
    return totalIncome;
  }

  // Method to get the incomes for a specific month
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

  // Method to filter incomes based on the selected month
  getFilteredIncomes() {
    let filteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = [...this.januaryIncomes];
        break;
      case 'February':
        filteredIncomes = [...this.februaryIncomes];
        break;
      case 'March':
        filteredIncomes = [...this.marchIncomes];
        break;
      default:
        break;
    }
    return filteredIncomes;
  }

  // Method to handle form submission
  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value; // Get the form values
      // Add the new income to the respective month's income array
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset(); // Reset the form
      // Optionally, you can reset the specific fields
      this.incomeForm.patchValue({
        month: '',
        source: '',
        amount: '',
        investments: '',
      });
    }
  }

  // Method to save the form (you can implement saving logic)
  saveForm() {
    console.log('Form saved');
  }

  // Method to navigate back to the dashboard
  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
    console.log('Navigating to dashboard');
  }
}
