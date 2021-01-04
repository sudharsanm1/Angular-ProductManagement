import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // tap((data) => console.log(`All ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getProduct(productId: number): Observable<IProduct> {
    return this.getProducts()
    .pipe(
      map((products: IProduct[]) => products.find(p => p.productId === productId))
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `error Occured ${err.error.message}`;
    } else {
      errorMessage = `server returned code ${err.status}, error Message ${err.message} `;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
