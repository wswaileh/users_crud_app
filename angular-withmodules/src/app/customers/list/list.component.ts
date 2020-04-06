import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customers : any;
  
  constructor(private _customersService : CustomersService) { }

  ngOnInit(): void {
    this._customersService.getCustomers().subscribe(customers => {
      this.customers = customers;
    })
  }

  deleteCustomer (customerId : number){
    this._customersService.deleteCustomer(customerId).subscribe(res => this.ngOnInit());
  }

}
