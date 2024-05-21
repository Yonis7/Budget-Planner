import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DasbboardComponent } from './dasbboard/dasbboard.component';
import { IncomeComponent } from './income/income.component';

// These set of routes will be used to navigate between different components in the Budget Planner module. The routes array contains the path to the component and the component that should be rendered when the path is accessed. The routes array is then exported to be used in the BudgetPlannerRoutingModule class.
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'dashboard', component: DasbboardComponent },
  { path: 'income', component: IncomeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

// The BudgetPlannerRoutingModule class is exported to be used in the BudgetPlannerModule class. The BudgetPlannerRoutingModule class imports the RouterModule and Routes modules from Angular. The RouterModule is then used to configure the routes array that was created earlier. The routes array is then exported to be used in the BudgetPlannerModule class.
export class BudgetPlannerRoutingModule {}
