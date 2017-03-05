import { GameRenderer } from "../../../game-engine/game-renderer";
export class ShapeShadowsRenderer extends GameRenderer{
    draw() {

        this.drawGrid();

        let context = this.context.getRenderingContext();

        context.fillStyle = 'red';

        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowColor = 'black';
        context.shadowBlur = 4;
        context.fillRect( 10, 10, 100, 100 );

        context.shadowOffsetX = -4;
        context.shadowOffsetY = -4;
        context.shadowColor = 'black';
        context.fillRect( 150, 10, 100, 100 );

        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        context.shadowColor = 'rgb( 100, 100, 100 )';
        context.shadowBlur = 8;
        context.arc( 200, 300, 100, 0, (Math.PI/180) * 360, false );
        context.fill();
    }
}
