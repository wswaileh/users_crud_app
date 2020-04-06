import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
  ],
  exports: [
    CollapseModule
  ]
})
export class BootstrapModule { }
