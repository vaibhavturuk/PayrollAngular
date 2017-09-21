import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { FormModule } from "app/layout/form/form.module";
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        ChartsRoutingModule,
        PageHeaderModule,
        FormModule,
        DataTableModule
    ],
    declarations: [ChartsComponent]
})

export class ChartsModule { 
    
}
