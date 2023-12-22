import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {IssuebooksComponent} from './issuebooks/issuebooks.component';
import {ListbooksComponent} from './listbooks/listbooks.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'issuebooks', component: IssuebooksComponent},
  { path: 'listbooks', component: ListbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
