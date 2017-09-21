import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OurSolutionRoutingModule } from './Our-Solution-routing.module';
import { OurSolutionComponent } from './Our-Solutions.component';

@NgModule({
    imports: [
        CommonModule,
        OurSolutionRoutingModule
    ],
    declarations: [OurSolutionComponent]
})
export class OurSolutionModule {
}
