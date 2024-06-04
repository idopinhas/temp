import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AllowedUsersComponent } from './components/allowed-users/allowed-users.component';
import { FormsModule } from '@angular/forms';
import { GeneralFormComponent } from './components/forms/general-form/general-form.component';
import { SignalsTestComponent } from './components/signals-test/signals-test.component';
import { features } from 'process';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'ausers' , component: AllowedUsersComponent},
  {path: 'forms', component:GeneralFormComponent},
  {path: 'signals' , component: SignalsTestComponent},
  { path: 'account' , loadChildren:() => import ('./feature/account/account.module').then((m)=> m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }