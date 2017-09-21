import { Component, OnInit } from '@angular/core';
import { routerTransition } from "app/router.animations";

@Component({
    selector: 'app-basicinfo',
    templateUrl: './basicinfo.component.html',
    styleUrls: ['./basicinfo.component.scss'],
    animations: [routerTransition()]
})
export class BasicInfoComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
