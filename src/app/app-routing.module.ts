import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensComponent } from './pages/itens/itens.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { 
    path: "", 
    redirectTo: "itens", 
    pathMatch: "full" 
  },
  {
    path: "itens",
    component: ItensComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "edit/:id",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
