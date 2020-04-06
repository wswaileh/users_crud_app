import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newCustomer: Customer;
  name: string;
  email: string;
  userName: string;

  constructor(private _customersService: CustomersService, private _router: Router) { }

  ngOnInit(): void {
    this.newCustomer = new Customer();
  }

  onSubmit(form: NgForm) {
    this.newCustomer.name = this.name;
    this.newCustomer.userName = this.userName;
    this.newCustomer.email = this.email;
    console.log(this.newCustomer);
    this._customersService.addCustomer(this.newCustomer).subscribe(customer => {
      form.reset();
      this._router.navigate(['/']);
    });
  }



}
