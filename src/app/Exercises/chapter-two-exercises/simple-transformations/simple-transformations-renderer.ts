import { GameRenderer } from "../../../game-engine/game-renderer";
import { SimpleTransformationsEnvironment } from "./simple-transformations-environment";
export class SimpleTransformationsRenderer extends GameRenderer {

    draw() {

        let context = this.context.getRenderingContext();
        let environment = <SimpleTransformationsEnvironment> this.context.getGameEnvironment();

        context.restore();
        this.setGridColor( "lightgreen" );
        this.setGridSize( 50 );
        this.setGridFontSize( 12 );
        this.drawGrid();
        context.save();

        environment.s1.render( context );
        environment.s2.render( context );
        environment.s3.render( context );
        environment.s4.render( context );

    }
}

