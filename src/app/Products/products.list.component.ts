import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './products.list.component.html',
  styleUrls: ['./products.list.component.css'],
})
export class ProductsListComponent implements OnInit {
  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this._listFilter)
      : this.products;
  }

  products: IProduct[] = [];

  performFilter(filter: string) {
    filter = filter.toLocaleLowerCase();
    return this.products.filter(
      (product) => product.productName.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
        next: products => {this.products = products;
            this.filteredProducts = this.products;
        },
        error: err => console.log(err)
    }
    );
}

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List:  ${message}`;
  }
}
