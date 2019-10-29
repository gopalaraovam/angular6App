import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "list", component: ListComponent,
  children:[{ path: "edit", component: EditComponent }] },
  { path: "edit", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
