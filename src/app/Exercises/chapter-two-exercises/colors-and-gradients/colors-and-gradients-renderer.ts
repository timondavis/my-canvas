import { GameRenderer } from "../../../game-engine/game-renderer";
export class ColorsAndGradientsRenderer extends GameRenderer{
    draw() {

        this.drawGrid();

        let context = this.context.getRenderingContext();

       // linear horizontal gradient
        let gradient = context.createLinearGradient(0, 0, 100, 0);
        ColorsAndGradientsRenderer.addColorStops( gradient );


        // now use the gradient as a fill style
        context.fillStyle = gradient;
        context.fillRect( 0, 0, 100, 100 );
        context.fillRect( 0, 100, 200, 200 );

        // same but with strokes around shapes.
        let gradient2 = context.createLinearGradient( 300, 0, 400, 0 );
        ColorsAndGradientsRenderer.addColorStops( gradient2 );

        context.lineWidth = 3;
        context.strokeStyle = gradient2;
        context.strokeRect( 300, 0, 100, 100 );
        context.strokeRect( 300, 100, 50, 100 );
        context.strokeRect( 300, 200, 200, 100 );

        // gradients in complex shape (surrounded by black border)
        let gradient3 = context.createLinearGradient( 0, 50, 0, 150 );
        ColorsAndGradientsRenderer.addColorStops( gradient3 );

        context.fillStyle = gradient3;
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo( 550, 50 );
        context.lineTo( 550, 150 );
        context.lineTo( 600, 150 );
        context.lineTo( 650, 100 );
        context.lineTo( 600, 50 );
        context.lineTo( 550, 50 );
        context.stroke(); // draw black border
        context.fill();  // fill shape, stroke() not required
        context.closePath();

        // filling a circle with a radial gradient
        let gradient4 = context.createRadialGradient( 150, 350, 25, 200, 400, 100);
        ColorsAndGradientsRenderer.addColorStops( gradient4 );

        context.beginPath();
        context.fillStyle = gradient4;
        context.arc( 200, 400, 80, 0, (Math.PI/180) * 360, false );
        context.stroke();
        context.fill();
        context.closePath();

        let gradient5 = context.createRadialGradient( 500, 350, 25, 550, 400, 100 );
        ColorsAndGradientsRenderer.addColorStops( gradient5 );

        context.beginPath();
        context.strokeStyle = gradient5;
        context.fillStyle = false;
        context.arc( 550, 450, 100, 0, (Math.PI/180) * 360, false );
        context.stroke();
        context.closePath();

    }

    private static addColorStops( gradient ){

        gradient.addColorStop( 0, 'rgb(255,0,0)' );
        gradient.addColorStop( 0.5, 'rgb(0,255,0)' );
        gradient.addColorStop( 1, 'rgb(255,0,0' );
    }
}
