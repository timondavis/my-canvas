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

    public linearGradientLeftColorFill : string
    public linearGradientCenterColorFill : string;
    public linearGradientRightColorFill : string;
    public linearGradientCenterPointFill : number;

    public linearGradientLeftColorStroke : string
    public linearGradientCenterColorStroke : string;
    public linearGradientRightColorStroke : string;
    public linearGradientCenterPointStroke : number;

    public textBaseline : string;
    public textAlign : string;
    public textAlpha : number;

    public shadowX : number;
    public shadowY : number;
    public shadowBlur : number;
    public shadowColor: string;

    public fillType : string;
    public strokeType: string;

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
        this.strokeType = 'basic';

        this.shadowX = 0;
        this.shadowY = 0;
        this.shadowBlur = 1;
        this.shadowColor = "#000000";

        this.message = "Hello pretty World";

        this.linearGradientLeftColorFill = '#f00';
        this.linearGradientCenterColorFill = '#00f';
        this.linearGradientRightColorFill = '#f00';
        this.linearGradientCenterPointFill = 0.50;

        this.linearGradientLeftColorStroke = '#f00';
        this.linearGradientCenterColorStroke = '#00f';
        this.linearGradientRightColorStroke = '#f00';
        this.linearGradientCenterPointStroke = 0.50;

        this.assignFormListener();
    }

    /**
     * Get the global form control event emitter and subscribe to the form update event
     */
    private assignFormListener() {

        let self = this;

        CanvasFormsObserverService.getInstance().getFormControlEventEmitter().subscribe(

            function( event ) {

                // Build function string and invoke
                let functionString = 'update_' + event.id;

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
    public update_strokeType( value )   { this.strokeType    = value; }
    public update_linearGradientLeftColorFill( value ) { this.linearGradientLeftColorFill = value; }
    public update_linearGradientCenterColorFill( value ) { this.linearGradientCenterColorFill = value; }
    public update_linearGradientRightColorFill( value ) { this.linearGradientRightColorFill = value; }
    public update_linearGradientCenterPointFill( value ) { this.linearGradientCenterPointFill = value; }
    public update_linearGradientLeftColorStroke( value ) { this.linearGradientLeftColorStroke = value; }
    public update_linearGradientRightColorStroke( value ) { this.linearGradientRightColorStroke = value; }
    public update_linearGradientCenterColorStroke( value ) { this.linearGradientCenterColorStroke = value; }
    public update_linearGradientCenterPointStroke( value ) { this.linearGradientCenterPointStroke = value; }
}
