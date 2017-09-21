import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurSolutionComponent } from "app/Home/Our-Solutions/Our-Solutions.component";


const routes: Routes = [
    { path: '', component: OurSolutionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurSolutionRoutingModule { }
