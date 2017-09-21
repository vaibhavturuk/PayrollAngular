import { CommonModule } from '@angular/common';
import { BasicdetRoutingModule } from "app/layout/dashboard/basicdet/basicdet-routing.module";
import { BasicdetComponent } from "app/layout/dashboard/basicdet/basicdet.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        BasicdetRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [BasicdetComponent]
   
})
export class BasicdetModule {
}
