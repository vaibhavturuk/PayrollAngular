import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from "app/Home/home.component";
import { HomeRoutingModule } from "app/Home/home-routing.module";
import { HeaderMainComponent } from "app/Home/Header-Main/header.component";

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        HomeRoutingModule,
        TranslateModule
    ],
    declarations: [
        HomeComponent,
        HeaderMainComponent
    ]
})
export class HomeModule { }
