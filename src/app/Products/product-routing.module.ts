import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products.list.component';
import { ProductDetailGuard } from './product.detail.guard';
import { ProductDetailComponent } from './product.detail.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
