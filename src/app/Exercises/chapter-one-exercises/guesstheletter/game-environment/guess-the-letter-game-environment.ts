import { GameContext } from "../../../../game-engine/game-context";
import { Debugger } from "../../../../game-engine/debugger";
import { GameEnvironment } from "../../../../game-engine/game-environment";

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

    public tryLetter( letter : string ) {

        this.today = new Date();
        Debugger.log( letter );
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

