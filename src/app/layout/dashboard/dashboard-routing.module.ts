import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Http } from "@angular/http";

const routes: Routes = [
    { path: '', component: DashboardComponent
   
}
   
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { 
  // company: any[];
  /**
   *
   */
  
  }

