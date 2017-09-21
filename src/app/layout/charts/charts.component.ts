import { Component, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from "app/dataservice.service";

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()],

})
export class ChartsComponent {
    

    posts:any[];
 companyName:any;
constructor(private service: DataserviceService) {}
      ngOnInit() {
          
        
        this.service.getData().subscribe((posts) => {
         console.log(posts);
            this.posts =posts;
        });  
         

         }
}
