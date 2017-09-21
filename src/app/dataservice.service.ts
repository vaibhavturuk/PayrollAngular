import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions } from "@angular/http";

@Injectable()
export class DataserviceService {

  constructor(private http:Http) { }
  getData(){
     return this.http.get('http://localhost:53287/api/PayRoll')
    .map(response=>response.json());
  }
getPosts(){
     return this.http.get('http://localhost:53287/api/PayRoll')
    .map(response=>response.json());
  }


 postEmployee(registerEmployee: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:53287/api/PayRoll', JSON.stringify(registerEmployee), options)
      .map(res => res.json());
  }
}
