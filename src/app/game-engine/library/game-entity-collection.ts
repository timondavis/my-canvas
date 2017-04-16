import { RenderableGameEntity } from "../game-entity/renderable-game-entity";
import { GameEntity } from "../game-entity/game-entity";
import { isUndefined } from "util";
export class GameEntityCollection {

    /**
     * Map of renderable game entities
     */
    private entities : Map<String, GameEntity>;

    /**
     * Make a new instance of a game collection
     */
    public constructor() {

        this.entities = new Map<String, GameEntity>();
    }

    /**
     * Get the raw entity collection for use with traversal mechanisms
     * @returns {Map<String, GameEntity>}
     */
    public  getCollection() : Map<String, GameEntity>{

        return this.entities;
    }

    /**
     * Retrieve a Game Entity
     *
     * @param name  The name of the entity
     *
     * @returns {undefined|GameEntity}
     */
    public getGameEntity( name : String ) : GameEntity {

        let entity = this.entities.get( name );

        if ( isUndefined( entity ) ) {

            throw ( "Game Entity requested but none was found.  Name: " + name );
        }

        return entity;
    }

    /**
     * Retrieve a Renderable Game Entity
     *
     * @param name
     * @returns {RenderableGameEntity}
     */
    public getRenderableGameEntity( name : String ) : RenderableGameEntity {

        let entity = this.getGameEntity( name );

        if ( ! ( entity instanceof RenderableGameEntity ) ) {

            throw ( "Game Entity requested as Renderable exists, but is not an instance or child of" +
            " RenderableGameEntity.  All Renderable Game Entities must extend or instance RenderableGameEntity." );
        }

        return <RenderableGameEntity> this.getGameEntity( name );
    }

    /**
     * Assign an entity to he collection.  Duplicate names will be overwritten.
     *
     * @param name String  The name by which to refer to the entity
     * @param entity RenderableGameEntity  A renderable game entity
     */
    public setGameEntity( name : String, entity : GameEntity ) : void {

        this.entities.set( name, entity );
    }
}
