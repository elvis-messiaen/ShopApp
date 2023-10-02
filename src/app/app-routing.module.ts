import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main/main.component";
import {ProductComponent} from "./produits/product/product.component";
import {BlogComponent} from "./contact/blog/blog.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'main', component: MainComponent},
  {path: 'produit', component: ProductComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ProductComponent},
  {path: '**', redirectTo: 'landing'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
