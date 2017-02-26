/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuessTheLetterGameEnvironmentService } from './guess-the-letter-game-environment.service';

describe('GuessTheLetterGameEnvironmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuessTheLetterGameEnvironmentService]
    });
  });

  it('should ...', inject([GuessTheLetterGameEnvironmentService], (service: GuessTheLetterGameEnvironmentService) => {
    expect(service).toBeTruthy();
  }));
});
