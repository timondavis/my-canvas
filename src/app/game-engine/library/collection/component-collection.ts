import { Component } from "@angular/core";
export class ComponentCollection {

    private components : Map <string, Component>;

    public constructor() {

        this.components = new Map<string, Component>();
    }

    /**
     * Add a component to the component collection
     *
     * @param key
     * @param component
     */
    public addComponent( key : string, component : Component ) : void {

        if ( ! this.components.get( key ) ) {

            this.components.set( key, component );

        } else {

            throw ( "Duplicate key " + key + " error when adding component to ComponentMap" );
        }
    }

    /**
     * Update -or- create a component registration in the Map.
     *
     * @param key
     * @param component
     */
    public updateComponent( key : string, component : Component ) : void {

        this.components.set( key, component );
    }

    /**
     * Get a component from the component collection
     * @param key
     * @returns {undefined|Component}
     */
    public getComponent( key : string ) : Component {

        return this.components.get( key );
    }
}
