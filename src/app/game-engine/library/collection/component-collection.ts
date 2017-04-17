import { Component } from "@angular/core";
export class ComponentCollection {

    private components : Map <string, Component>;

    public constructor() {

        this.components = new Map<string, Component>();
    }

    /**
     * Execute a foreach loop, iterating over each component in the collection
     * @param func : any callbackfn( value : Component, key : string ) (
     */
    public forEach( func ) {

        this.components.forEach( func );
    }

    /**
     * Update -or- create a component registration in the Map.
     *
     * @param key
     * @param component
     */
    public setComponent( key : string, component : Component ) : void {

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
