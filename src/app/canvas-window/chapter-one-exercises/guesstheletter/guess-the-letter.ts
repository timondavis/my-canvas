import { GameContext } from "../../../game-engine/game-context";
import { GuessTheLetterRenderer } from "./renderer/guess-the-letter-renderer";
import { GuessTheLetterGameEnvironment } from "./game-environment/guess-the-letter-game-environment";

export class GuessTheLetter {

    public constructor( private context : GameContext ) {

        this.context.setGameEnvironment( new GuessTheLetterGameEnvironment( context ) );
        this.context.setGameRenderer( new GuessTheLetterGameEnvironment( context ) );

        this.loadGame();
    }

    public loadGame() {

        let environment = ( <GuessTheLetterGameEnvironment> this.context.getGameEnvironment() );

        environment.resetLetterToGuess();
    }

    public getContext() : GameContext {

        return this.context;
    }
}
