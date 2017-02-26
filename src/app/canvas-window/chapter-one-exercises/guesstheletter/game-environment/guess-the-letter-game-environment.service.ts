import { InputControllerService } from "../../../input-controller.service";
import { Debugger } from "../../../../debugger";
import { Injectable } from "@angular/core";

@Injectable()
export class GuessTheLetterGameEnvironmentService {

  private guesses : number = 0;
  private message : string = "Guess the letter from a (lower) to z (higher)";
  private letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z" ];
  private today = new Date();
  private letterToGuess : string = "";
  private higherOrLower : string = "";
  private lettersGuessed = [];
  private gameOver : boolean = false;

  public constructor ( private masterInputController : InputControllerService ) {

    this.masterInputController.windowClicked.subscribe(

        GuessTheLetterGameEnvironmentService.reactToClicks,
        err => Debugger.log( err )
    )
  }

  /**
   * Reset the letter to be guessed
   */
  public resetLetterToGuess() {


    this.letterToGuess = this.letters[ Math.floor( Math.random() * this.letters.length ) ];
  }

  private static reactToClicks( e ) {

      Debugger.log( "HEY!" );
  }

}
