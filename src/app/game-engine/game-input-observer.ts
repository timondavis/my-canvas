import { Output, EventEmitter } from "@angular/core";

export class GameInputObserver {

    @Output() windowClicked: EventEmitter<any>;

    public constructor() {

        this.windowClicked = new EventEmitter<any>();
    }

    public registerWindowClicked( e ) {

        this.windowClicked.emit( e );
    }
}
