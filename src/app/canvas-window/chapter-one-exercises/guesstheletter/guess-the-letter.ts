import { InputControllerService } from '../../input-controller.service';
import { GuessTheLetterRenderer } from "./renderer/guess-the-letter-renderer";
import { GuessTheLetterGameEnvironmentService } from "./game-environment/guess-the-letter-game-environment.service";
import { CanvasWindowComponent } from "../../canvas-window.component";
import { GameContext } from "../../game-context";

export class GuessTheLetter {

    private gameEnvironment : GuessTheLetterGameEnvironmentService;
    private renderer : GuessTheLetterRenderer;

    public constructor( context : GameContext ) {

        this.gameEnvironment = new GuessTheLetterGameEnvironmentService( context.getInputListener() );
        this.renderer = new GuessTheLetterRenderer( context.getRenderingContext(), this.gameEnvironment );

        this.initGame();
    }

    public initGame() {

        this.gameEnvironment.resetLetterToGuess();
    }
}
