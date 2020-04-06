import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private server:String = "http://localhost:8080";

  constructor(private _http : HttpClient) { }

  getCustomers(){
    return this._http.get(this.server + '/users');
  }

  getCustomer(customerId: number ){
    return this._http.get(this.server + '/users/' + customerId);
  }

  deleteCustomer(customerId: number){
    return this._http.delete(this.server + '/users/' + customerId);
  }

  addCustomer(customer: Customer){
    return this._http.post(this.server + '/users/' , customer);
  }

  updateCustomer(customer: Customer){
    return this._http.put(this.server + '/users/' + customer.id , customer);
  }

}
