import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ],
  exports: [
    LoginComponent,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
