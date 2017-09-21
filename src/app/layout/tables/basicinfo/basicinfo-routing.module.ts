import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInfoComponent } from "app/layout/tables/basicinfo/basicinfo.component";

const routes: Routes = [
    { path: '', component: BasicInfoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicInfoRoutingModule { }
