import { TestBed, async, inject } from '@angular/core/testing';

import { ServicosGuard } from './servicos.guard';

describe('ServicosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosGuard]
    });
  });

  it('should ...', inject([ServicosGuard], (guard: ServicosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
