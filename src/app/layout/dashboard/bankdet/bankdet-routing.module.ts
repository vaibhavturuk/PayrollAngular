import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BankdetComponent } from "app/layout/dashboard/bankdet/bankdet.component";


const routes: Routes = [
    { path: '', component: BankdetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankdetRoutingModule { }
