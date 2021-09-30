import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestListComponentComponent } from './test-list-component/test-list-component.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homePage', component: TestComponentComponent },
  { path: 'userList', component: TestListComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
