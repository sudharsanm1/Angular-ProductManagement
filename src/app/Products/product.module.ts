import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products.list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product.detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
  ],
  imports: [
    ProductRoutingModule,
    SharedModule    
  ],
  exports: [RouterModule],
})
export class ProductModule { }
