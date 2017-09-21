import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataserviceService } from "app/dataservice.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
        alerts: any;
        service: any;
        
    // public alerts: Array<any> = [];
    // public sliders: Array<any> = [];

    

 posts:any[];
companyName:any;
//constructor(private service: DataserviceService) {}

    constructor(public router: Router,service: DataserviceService) { }

    ngOnInit() {
         if (this.router.url === '/') {
             this.router.navigate(['/basicdet']);
         }
         
         
      
    }


 createPost(input:HTMLInputElement)
      {
   var post= {FirstName:input.value}; 
  
  input.value='';
  this.service.createPost(post)
    .subscribe(response => {
      post['Id'] = response.json().Id;
      this.posts.splice(0,0,post);
        }); 
  }

    // public closeAlert(alert: any) {
    //    const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }
}
//    this.posts.getData()
//         .subscribe(response =>{
//       this.posts=response.json();
//    });
