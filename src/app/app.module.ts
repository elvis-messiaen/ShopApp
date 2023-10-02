import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/main/card/card.component';
import {RouterOutlet} from "@angular/router";
import { MainComponent } from './components/main/main/main.component';
import { ProductComponent } from './produits/product/product.component';
import { ProdctItemComponent } from './produits/product-item/prodct-item.component';
import { ProdctListComponent } from './produits/prodct-list/prodct-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './contact/blog/blog.component';
import { ContactComponent } from './contact/contact/contact.component';


const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '$', // Personnalisez le préfixe de la devise ici
  suffix: '',
  thousands: '.',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MainComponent,
    ProductComponent,
    ProdctItemComponent,
    ProdctListComponent,
    SigninComponent,
    SignupComponent,
    BlogComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
