import { GuessTheLetterGameEnvironment } from "./game-environment/guess-the-letter-game-environment";
import { GameContext } from "../../../game-engine/game-context";
import { Game } from "../../../game-engine/game";

export class GuessTheLetter extends Game {

    public constructor( context: GameContext ) {

        super( context );

        this.context.setGameEnvironment( new GuessTheLetterGameEnvironment( context ) );
        this.context.setGameRenderer( new GuessTheLetterGameEnvironment( context ) );

        this.loadGame();

    }

    public loadGame() {

        let environment = ( <GuessTheLetterGameEnvironment> this.context.getGameEnvironment() );
        environment.resetLetterToGuess();
    }
}
