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

        this.textBaseline = "top";
        this.textAlign = "start";
        this.textAlpha = 1.0;

        this.shadowX = 0;
        this.shadowY = 0;
        this.shadowBlur = 1;
        this.shadowColor = "#000000";

        this.message = "Hello pretty World";

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
                let functionString = 'update_' + event.target.id;

                eval( 'self.' + functionString + '( event );' );
            },

            ( err ) => Debugger.log( err )
        );
    }

    // Update method not really implemented for this program.  At least not for now.  Everything really happens
    // based on form events.  ::shrug::
    update() { }

    private update_renderType( event )   { this.fillOrStroke  = event.target.value; }
    private update_fontStyle( event )    { this.fontStyle     = event.target.value; }
    private update_fontWeight( event )   { this.fontWeight    = event.target.value; }
    private update_fontSize( event )     { this.fontSize      = event.target.value; }
    private update_fillColor( event )    { this.fillColor     = '#' + event.target.value; }
    private update_textBaseline( event ) { this.textBaseline  = event.target.value; }
    private update_textAlign( event )    { this.textAlign     = event.target.value; }
    private update_textAlpha( event )    { this.textAlpha     = event.target.value; }
    private update_shadowX( event )      { this.shadowX       = event.target.value; }
    private update_shadowY( event )      { this.shadowY       = event.target.value; }
    private update_shadowBlur( event )   { this.shadowBlur    = event.target.value; }
    private update_shadowColor( event )  { this.shadowColor   = '#' + event.target.value; }
    private update_fillType( event )     { this.fillType      = event.target.value; }
}
