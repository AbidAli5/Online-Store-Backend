import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path:'search/:searchTerm',component: HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path: 'Food/:id',component:ProductDetailComponent},
  {path : 'login',component: LoginComponentComponent},
  {path: 'cart-page',component:CartPageComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
