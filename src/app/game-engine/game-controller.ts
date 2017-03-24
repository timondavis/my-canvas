import { GameContext } from "./game-context";
export abstract class GameController {

   public constructor( protected context : GameContext ) {}

   public getContext() {
      return this.context;
   }

   public abstract init();
}
