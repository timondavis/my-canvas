/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanvasFormsObserverService } from './canvas-forms-observer.service';

describe('CanvasFormsObserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasFormsObserverService]
    });
  });

  it('should ...', inject([CanvasFormsObserverService], (service: CanvasFormsObserverService) => {
    expect(service).toBeTruthy();
  }));
});
