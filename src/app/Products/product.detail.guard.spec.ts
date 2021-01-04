import { TestBed } from '@angular/core/testing';

import { Product.DetailGuard } from './product.detail.guard';

describe('Product.DetailGuard', () => {
  let guard: Product.DetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Product.DetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
