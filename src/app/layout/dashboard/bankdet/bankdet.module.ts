import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BankdetComponent } from "app/layout/dashboard/bankdet/bankdet.component";
import { BankdetRoutingModule } from "app/layout/dashboard/bankdet/bankdet-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports: [
        CommonModule,
        BankdetRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [BankdetComponent]
})

export class BankdetModule {
}
