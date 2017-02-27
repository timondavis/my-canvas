import { GameEnvironment } from "../../game-environment";
import { GameContext } from "../../game-context";
import { Debugger } from "../../debugger";
export class GuessTheLetterGameEnvironment extends GameEnvironment {

    private guesses: number = 0;
    private message: string = "Guess the letter from a (lower) to z (higher)";
    private letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z" ];
    private today = new Date();
    private letterToGuess: string = "";
    private higherOrLower: string = "";
    private lettersGuessed = [];
    private gameOver: boolean = false;

    public constructor(context : GameContext ) {

        super( context );

        this.context.getInputObserver().mouseClicked.subscribe(
            GuessTheLetterGameEnvironment.reactToClicks,
            err => Debugger.log( err )
        );
    }

    public init() {}

    public update() {}


    /**
     * Reset the letter to be guessed
     */
    public resetLetterToGuess() {

        this.letterToGuess = this.letters[ Math.floor( Math.random() * this.letters.length ) ];
    }

    private static reactToClicks( e ) {
    }
}

