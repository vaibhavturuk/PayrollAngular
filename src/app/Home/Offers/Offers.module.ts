import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OffersRoutingModule } from "app/Home/Offers/Offers-routing.module";
import { OffersComponent } from "app/Home/Offers/Offers.component";



@NgModule({
    imports: [
        CommonModule,
        OffersRoutingModule
    ],
    declarations: [OffersComponent]
})
export class OffersModule {
}
