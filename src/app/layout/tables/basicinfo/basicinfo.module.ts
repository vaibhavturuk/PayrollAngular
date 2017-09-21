import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from "app/shared";
import { BasicInfoRoutingModule } from "app/layout/tables/basicinfo/basicinfo-routing.module";
import { BasicInfoComponent } from "app/layout/tables/basicinfo/basicinfo.component";


@NgModule({
    imports: [
        CommonModule,
       BasicInfoRoutingModule,
        PageHeaderModule
    ],
    declarations: [BasicInfoComponent]
})
export class BasicInfoModule { }
