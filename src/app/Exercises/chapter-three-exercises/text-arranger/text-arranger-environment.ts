import { GameEnvironment } from "../../../game-engine/game-environment";
import { TextArrangerFormComponent } from "./text-arranger-form/text-arranger-form.component";
import { ReflectiveInjector } from "@angular/core";
import { Debugger } from "../../../game-engine/debugger";
import { CanvasFormsObserverService } from "../canvas-forms-observer.service";

export class TextArrangerEnvironment extends GameEnvironment {

    public fillOrStroke : string;
    public fontStyle : string;
    public fontWeight : string;
    public fontSize : string;
    public fillColor : string;

    public strokeColor;

    public linearGradientLeftColor : string;
    public linearGradientCenterColor: string;
    public linearGradientRightColor : string;

    public textBaseline : string;
    public textAlign : string;
    public textAlpha : number;

    public shadowX : number;
    public shadowY : number;
    public shadowBlur : number;
    public shadowColor: string;

    public fillType:string;

    public message : string;

    init() {

        this.fillOrStroke = "fill";
        this.fontStyle = "normal";
        this.fontWeight = "normal";
        this.fontSize = "50";
        this.fillColor = "#ff0000";

        this.strokeColor = "#000000";

        this.textBaseline = "top";
        this.textAlign = "start";
        this.textAlpha = 1.0;

        this.fillType = 'basic';

        this.shadowX = 0;
        this.shadowY = 0;
        this.shadowBlur = 1;
        this.shadowColor = "#000000";

        this.message = "Hello pretty World";

        this.linearGradientLeftColor = '#f00';
        this.linearGradientCenterColor = '#00f';
        this.linearGradientRightColor = '#f00';

        this.assignFormListener();
    }

    /**
     * Get the global form control event emitter and subscribe to the form update event
     */
    private assignFormListener() {

        let self = this;

        CanvasFormsObserverService.getInstance().getFormControlEventEmitter().subscribe(

            function( event ) {

                Debugger.log( 'Emitted event trigger caught on subscription' );
                // Build function string and invoke
                let functionString = 'update_' + event.id;
                Debugger.log( functionString );
                Debugger.log( 'self.' + functionString + '( ' + event.value + ' );'  );

                eval( 'self.' + functionString + '( "' + event.value + '" );' );
            },

            ( err ) => Debugger.log( err )
        );
    }

    // Update method not really implemented for this program.  At least not for now.  Everything really happens
    // based on form events.  ::shrug::
    update() { }

    public update_renderType( value )   { this.fillOrStroke  = value; }
    public update_fontStyle( value )    { this.fontStyle     = value; }
    public update_fontWeight( value )   { this.fontWeight    = value; }
    public update_fontSize( value )     { this.fontSize      = value; }
    public update_fillColor( value )    { this.fillColor     = value; }
    public update_textBaseline( value ) { this.textBaseline  = value; }
    public update_textAlign( value )    { this.textAlign     = value; }
    public update_textAlpha( value )    { this.textAlpha     = value; }
    public update_shadowX( value )      { this.shadowX       = value; }
    public update_shadowY( value )      { this.shadowY       = value; }
    public update_shadowBlur( value )   { this.shadowBlur    = value; }
    public update_shadowColor( value )  { this.shadowColor   = value; }
    public update_strokeColor( value )  { this.strokeColor   = value; }
    public update_fillType( value )     { this.fillType      = value; }
    public update_linearGradientLeftColor( value ) { this.linearGradientLeftColor = value; }
    public update_linearGradientCenterColor( value ) { this.linearGradientCenterColor = value; }
    public update_linearGradientRightColor( value ) { this.linearGradientRightColor = value; }

}
