import { TestBed, inject } from '@angular/core/testing';

import { BasicauthhttpinterceptorService } from './basicauthhttpinterceptor.service';

describe('BasicauthhttpinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicauthhttpinterceptorService]
    });
  });

  it('should ...', inject([BasicauthhttpinterceptorService], (service: BasicauthhttpinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
