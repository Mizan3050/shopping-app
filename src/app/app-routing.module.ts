import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {path: 'products', loadChildren: ()=> import('./product/product.module').then(module=> module.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
