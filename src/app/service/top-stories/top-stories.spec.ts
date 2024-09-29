import { TestBed } from '@angular/core/testing';

import { TopSeriesService } from './top-stories.service';

describe('TopSeriesService', () => {
  let service: TopSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
