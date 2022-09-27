import { TestBed } from '@angular/core/testing';

import { FilmwebConnectionService } from './filmweb-connection.service';

describe('FilmwebConnectionService', () => {
  let service: FilmwebConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmwebConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
