import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicdetComponent } from "./basicdet.component";


const routes: Routes = [
    { path: '', component: BasicdetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicdetRoutingModule { }
