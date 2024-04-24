import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    // Remove LoginComponent from declarations array
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    LoginComponent // Add LoginComponent to imports array
  ],
  exports: [
    LoginComponent,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
