import { Game } from "../game";
export abstract class GameController {

   public constructor( protected game : Game ) {}

   public getGame() {
      return this.game;
   }

   public abstract init();
}
