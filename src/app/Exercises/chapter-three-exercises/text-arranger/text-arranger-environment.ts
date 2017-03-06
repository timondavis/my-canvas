import { GameEnvironment } from "../../../game-engine/game-environment";
import { TextArrangerFormComponent } from "./text-arranger-form/text-arranger-form.component";
import { Debugger } from "../../../game-engine/debugger";
export class TextArrangerEnvironment extends GameEnvironment {

    public fillOrStroke : string;

    init() {

        this.fillOrStroke = "fill";
        this.assignFormListener();
    }

    public assignFormListener() {

        let self = this;

        let textArrangerForm = <TextArrangerFormComponent> this.context.getRelatedComponent( 'textArrangerForm' );

        textArrangerForm.textArrangerFormUpdate.subscribe(

            function( event ) {
                let value = event.target.selectedOptions[ 0 ].value;
                self.fillOrStroke = value;

                Debugger.log( "event caught" );
                Debugger.log( value );
            },

            ( err ) => Debugger.log( err )
        );

    }

    update() { }
}
