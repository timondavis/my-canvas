export class ServiceMap {

    private services : Map<string, Object>;

    public constructor() {

        this.services = new Map<string, Object>();
    }

    public addService( key : string, service : Object ) {

        if ( ! this.services.get( key ) ) {

            this.services.set( key, service );
        } else {
            throw ( "Duplicate key " + key + " error when adding service to ServiceMap")
        }
    }

    public updateService( key : string, service : Object ) {

        this.services.set( key, service );
    }

    public getService( key : string ) : Object {

        return this.services.get( key );
    }
}
