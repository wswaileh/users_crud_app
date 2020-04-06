import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { NgForm } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  customer: Customer = null;

  customerId: number;
  userName: string;
  name: string;
  email: string;

  constructor(private _customersService: CustomersService, private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

this._activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
      this._customersService.getCustomer(this.customerId).subscribe(
        customer => {
          this.customer = customer as Customer;
          this.name = this.customer.name;
          this.userName = this.customer.userName
          this.email = this.customer.email;
        });

    });  }

  onSubmit(editUserForm: NgForm) {
    this.customer.name = this.name;
    this.customer.email = this.email;
    
    this._customersService.updateCustomer(this.customer).subscribe( res => {
      editUserForm.reset();
      console.log(res);
      this._router.navigate(['/']);
    });
  }

}
