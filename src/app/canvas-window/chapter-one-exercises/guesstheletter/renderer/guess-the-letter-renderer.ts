import { GuessTheLetterGameEnvironmentService } from "../game-environment/guess-the-letter-game-environment.service";
export class GuessTheLetterRenderer {

    public constructor( private context : CanvasRenderingContext2D, gameEnvironment : GuessTheLetterGameEnvironmentService ) {

    }
}
