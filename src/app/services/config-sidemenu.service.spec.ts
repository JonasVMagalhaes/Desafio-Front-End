import { TestBed } from '@angular/core/testing';

import { ConfigSidemenuService } from './config-sidemenu.service';

describe('ConfigSidemenuService', () => {
  let service: ConfigSidemenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigSidemenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
