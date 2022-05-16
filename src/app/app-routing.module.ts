import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"users/list", component: UsersComponent},
  {path:"users/add", component : CreateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
