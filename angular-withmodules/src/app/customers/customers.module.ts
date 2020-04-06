import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersService } from './customers.service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddComponent, UpdateComponent, ListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
