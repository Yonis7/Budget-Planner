import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// These are the routes for the application. All routes are defined in the routes array.
export const routes: Routes = [
  //The first route is for the BudgetPlannerModule, which is lazy loaded. The second route is for the LoginComponent, which is a child route of the BudgetPlannerModule.
  { path: 'budget-planner', loadChildren: () => import ('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
