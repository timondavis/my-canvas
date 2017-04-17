import { Game } from "./game";
import { GameEntityCollection } from "./library/collection/game-entity-collection";
export abstract class GameEnvironment {

    private gameEntityCollection : GameEntityCollection;

    public abstract init();

    public abstract update();

    public constructor( protected game : Game ) {

        this.gameEntityCollection = new GameEntityCollection();
    }

    public getGameEntities() {

        return this.gameEntityCollection;
    }

    protected getGame() {

        return this.game;
    }

}
