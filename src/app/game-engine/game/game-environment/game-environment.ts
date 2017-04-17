import { GameEntityCollection } from "../game-entity/collection/game-entity-collection";
import { Game } from "../game";
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
