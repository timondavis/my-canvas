import { GameContext } from "./game-context";
export abstract class GameController {

   public constructor( protected context : GameContext ) {}

   public abstract init();
}
