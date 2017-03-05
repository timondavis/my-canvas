import { GameRenderer } from "../../../game-engine/game-renderer";
export class IsPointInPathRenderer extends GameRenderer {

    draw() {

        this.clear();

        this.setGridSize( 20 );
        this.setGridFontSize( 8 );
        this.setGridBackgroundColor( "lightgreen" );
        this.setGridColor( "darkgreen" );
        this.drawGrid();

        let context = this.context.getRenderingContext();

        context.strokeStyle = "red";
        context.lineWidth = 5;

        context.beginPath();
        context.moveTo( 0, 0 );
        context.lineTo( 50, 0 );
        context.lineTo( 50, 50 );
        context.moveTo( 0, 0 );
        context.stroke();

        let isPoint1InPath1 = context.isPointInPath( 0, 0 );
        let isPoint1InPath2 = context.isPointInPath( 25, 25 );

        console.log( 'isPoint1InPath1 = ' + isPoint1InPath1 );
        console.log( 'isPoint1InPath2 = ' + isPoint1InPath2 );
        context.closePath();



    }
}
