import { GuessTheLetterGameEnvironment } from "./game-environment/guess-the-letter-game-environment";
import { GameContext } from "../../../game-engine/game-context";
import { Game } from "../../../game-engine/game";
import { GuessTheLetterRenderer } from "./renderer/guess-the-letter-renderer";
import { Debugger } from "../../../game-engine/debugger";

export class GuessTheLetter extends Game {

    public constructor( context: GameContext ) {

        super( context );

        this.context.setGameEnvironment( new GuessTheLetterGameEnvironment( this.context ) );
        this.context.setGameRenderer( new GuessTheLetterRenderer( this.context ) );
    }

    public loadGame() {

        this.context.getGameEnvironment().init();
        this.isGameLoaded = true;
    }

    public run() {

        this.context.getGameRenderer().draw();
    }
}
