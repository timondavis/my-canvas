import { GameEnvironment } from "../../../game-engine/game-environment";
import { TextArrangerFormComponent } from "./text-arranger-form/text-arranger-form.component";
import { Debugger } from "../../../game-engine/debugger";
export class TextArrangerEnvironment extends GameEnvironment {

    public fillOrStroke : string;
    public fontStyle : string;
    public fontWeight : string;


    public message : string;


    init() {

        this.fillOrStroke = "fill";
        this.fontStyle = "normal";
        this.fontWeight = "normal";

        this.message = "Hello World";
        this.assignFormListener();
    }

    public assignFormListener() {

        let self = this;

        let textArrangerForm = <TextArrangerFormComponent> this.context.getRelatedComponent( 'textArrangerForm' );

        textArrangerForm.textArrangerFormUpdate.subscribe(

            function( event ) {

                // Build function string and invoke
                let functionString = 'update_' + event.target.id;
                eval( 'self.' + functionString + '( event );');

                Debugger.log( event );
            },

            ( err ) => Debugger.log( err )
        );
    }

    update() { }

    private update_renderType( event ) { this.fillOrStroke = event.target.selectedOptions[ 0 ].value; }
    private update_fontStyle( event )  { this.fontStyle = event.target.selectedOptions[ 0 ].value; }
    private update_fontWeight( event ) { this.fontWeight = event.target.selectedOptions[ 0 ].value; }
}
