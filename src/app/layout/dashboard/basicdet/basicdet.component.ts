import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-basicdet',
  templateUrl: './basicdet.component.html',
  styleUrls: ['./basicdet.component.scss']
})
export class BasicdetComponent implements OnInit {
  userForm: any;
  

  constructor(private DataService: DataserviceService) { }

  ngOnInit() {
  }
 
   
EmployeeCode:string;
   FirstName:string;
   LastName:string;
   DOB:string;
   Email:string;
   MobileNumber:string;
   registerEmployee: any;
    addEmployee: any;

  
    onAddEmployee(f: NgForm) {

    this.registerEmployee = f.value;

    
    this.DataService.postEmployee(this.registerEmployee).subscribe((Employee) => {
      console.log(Employee);

      this.addEmployee = Employee;
    });

    console.log(f.value);

   
    window.location.reload();

  }

}
interface Student {
  //id: number,
     
EmployeeCode:string,
   FirstName:string,
   LastName:string,
   DOB:string,
   Email:string,
   MobileNumber:string
 
}
