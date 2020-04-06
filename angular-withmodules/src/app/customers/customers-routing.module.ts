import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

//Components
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    {path: '', component: ListComponent},
    {path: 'add', component: AddComponent},
    {path: 'update/:id', component: UpdateComponent},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomersRoutingModule { }