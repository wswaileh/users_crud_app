import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddComponent } from './views/add/add.component';
import { UpdateComponent } from './views/update/update.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add', component: AddComponent},
  {path:'update/:userId', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
