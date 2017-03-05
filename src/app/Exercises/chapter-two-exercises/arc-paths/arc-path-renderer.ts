import { GameRenderer } from "../../../game-engine/game-renderer";
import { Debugger } from "../../../game-engine/debugger";
import { ArcPathEnvironment } from "./arc-path-environment";
export class ArcPathRenderer extends GameRenderer {

    draw() {

        let c = this.context.getRenderingContext();
        let e = <ArcPathEnvironment> this.context.getGameEnvironment();

        c.fillStyle = "#FFFFFF";
        c.fillRect( 0, 0, 800, 600 );

        // Style
        c.strokeStyle = "black";
        c.fillStyle = "black";
        c.font = "12px Sans-Serif";
        c.textBaseline = "top";
        c.lineWidth = 5;

        // Circle
        c.fillText( "Circle", 85, 50 );


        c.beginPath();
        c.arc( 100, 100, 20, (Math.PI/180) * 0, (Math.PI/180) * 360, false );
        c.stroke();
        c.closePath();


        // Quarter Circle Arc
        c.fillText( "1/4 Circle", 80, 170 );

        c.beginPath();
        c.arc( 100, 200, 20, (Math.PI/180) * 0, (Math.PI/180) * 90, false );
        c.stroke();
        c.closePath();


        // 3/4 Circle Arc
        c.fillText( "3/4 Circle", 80, 250 );

        c.beginPath();
        c.arc( 100, 300, 20, (Math.PI/180) * 0, (Math.PI/180) * 90, true );
        c.stroke()
        c.closePath();

        // Arc To
        c.fillText( "Arc To", 280, 50 );

        c.beginPath();
        c.moveTo( 300, 100 );
        c.lineTo( 400, 300 );
        c.arcTo( e.x1 , e.y1 , e.x2, e.y2, e.radius );
        c.stroke();
        c.closePath();
    }
}
