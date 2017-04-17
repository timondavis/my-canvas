import { Output, EventEmitter } from "@angular/core";
import { gameEngineConfiguration } from "../../environments/environment";
import { Debugger } from "./library/debugger";

export class GameInputObserver {

    @Output() mouseClicked : EventEmitter<any>;
    @Output() keyPressed : EventEmitter<any>;
    @Output() keyReleased : EventEmitter<any>;
    @Output() mouseEnteredArea : EventEmitter<any>;
    @Output() mouseLeftArea : EventEmitter<any>;
    @Output() mouseMoved : EventEmitter<any>;

    public constructor() {

        this.mouseClicked = new EventEmitter<any>();
        this.keyPressed = new EventEmitter<any>();
        this.mouseEnteredArea = new EventEmitter<any>();
        this.mouseLeftArea = new EventEmitter<any>();
        this.keyReleased = new EventEmitter<any>();
        this.mouseMoved = new EventEmitter<any>();
    }

    public registerMouseClicked( e ) {

        this.mouseClicked.emit( e );

        if ( gameEngineConfiguration.showInputLogInDebugger ) {
            Debugger.log( "Window Clicked" );
            Debugger.log( e );
        }
    }

    public registerKeyPress( e ) {

        this.keyPressed.emit( e );

        if ( gameEngineConfiguration.showInputLogInDebugger ) {
            Debugger.log( "Key Pressed" );
            Debugger.log( e );
        }
    }

    public registerMouseEnter( e ) {

        this.mouseEnteredArea.emit( e );

        if ( gameEngineConfiguration.showInputLogInDebugger ) {
            Debugger.log( "Mouse Entered Area" );
            Debugger.log( e );
        }
    }

    public registerMouseLeave( e ) {

        this.mouseLeftArea.emit( e );

        if ( gameEngineConfiguration.showInputLogInDebugger ) {
            Debugger.log( "Mouse Left Area" );
            Debugger.log( e );
        }
    }

    public registerKeyRelease( e ) {

        this.keyReleased.emit( e );

        if ( gameEngineConfiguration.showInputLogInDebugger ) {
            Debugger.log( "Released" );
            Debugger.log( e );
        }
    }

    public registerMouseMove( e ) {

        this.mouseMoved.emit( e );

        if ( gameEngineConfiguration.showInputLogInDebugger ) {
            Debugger.log( "Mouse Moved" );
            Debugger.log( e );
        }
    }
}
