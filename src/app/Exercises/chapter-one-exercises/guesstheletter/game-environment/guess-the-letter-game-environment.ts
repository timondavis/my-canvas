import { GameContext } from "../../../../game-engine/game-context";
import { Debugger } from "../../../../game-engine/debugger";
import { GameEnvironment } from "../../../../game-engine/game-environment";

export class GuessTheLetterGameEnvironment extends GameEnvironment {

    public guesses: number = 0;
    public message: string = "Guess the letter from a (lower) to z (higher)";
    public letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z" ];
    public today = new Date();
    public letterToGuess: string = "";
    public higherOrLower: string = "";
    public lettersGuessed = [];
    public gameOver: boolean = false;

    public constructor( private context : GameContext ) {

        super();
    }

    public init() {

        this.resetGame();
        this.assignInputReactions();
    }

    public resetGame() {

        this.resetLetterToGuess();
        this.resetGuesses();
        this.gameOver = false;
    }

    public tryLetter( letterPressed : string ) {

        let letter = letterPressed.toLowerCase();

        this.guesses++;
        this.lettersGuessed.push( letter );

        if  ( letter == this.letterToGuess ) {

            this.gameOver = true;
        } else {

            let letterIndex = this.letters.indexOf( this.letterToGuess );
            let guessIndex = this.letters.indexOf( letter );

            if ( guessIndex < 0 ) {

                this.higherOrLower = "That is not a letter";
            } else if ( guessIndex > letterIndex ) {

                this.higherOrLower = "Lower";

            } else {

                this.higherOrLower = "Higher";
            }
        }

        this.context.getGameRenderer().draw();
    }

    private resetLetterToGuess() {

        this.letterToGuess = this.letters[ Math.floor( Math.random() * this.letters.length ) ];
    }

    private resetGuesses() {
        this.guesses = 0;
        this.lettersGuessed = [];
    }

    private assignInputReactions() {

        let game = this;
        this.context.getInputObserver().keyPressed.subscribe( function( e ) { game.tryLetter( e.key ) } );
    }
}

