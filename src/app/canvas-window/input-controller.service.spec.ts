/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InputControllerService } from './input-controller.service';

describe('InputControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputControllerService]
    });
  });

  it('should ...', inject([InputControllerService], (service: InputControllerService) => {
    expect(service).toBeTruthy();
  }));
});
