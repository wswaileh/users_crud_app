import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
