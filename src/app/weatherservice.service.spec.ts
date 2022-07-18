import { TestBed } from '@angular/core/testing';

import { WeatherserviceService } from './weatherservice.service';

describe('WeatherserviceService', () => {
  let service: WeatherserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
