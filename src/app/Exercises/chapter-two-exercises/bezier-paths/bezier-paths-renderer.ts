import { GameRenderer } from "../../../game-engine/game-renderer";
import { BezierPathsEnvironment } from "./bezier-paths-environment";
export class BezierPathsRenderer extends GameRenderer {

   draw() {


      let c = this.context.getRenderingContext();
      let env = <BezierPathsEnvironment> this.context.getGameEnvironment();

      // Clear
      c.fillStyle = "#FFFFFF";
      c.fillRect( 0, 0, 800, 600 );

      // Set styles
      c.fillStyle = "#000000";
      c.font = "16px Sans-Serif";
      c.strokeStyle = "#000000";
      c.lineWidth = 5;

      // Quadratic Curve
      c.fillText( "Quadratic Curve", 20, 30 );
      c.beginPath();
      c.moveTo( 50, 50 );
      c.quadraticCurveTo( 150, 75, 50, 100 );
      c.stroke();
      c.closePath();

      // Cubic Bezier Curve
      c.fillText( "Cubic Curve", 225, 50 );
      c.beginPath();
      c.moveTo( 250, 100 );
      c.bezierCurveTo( env.p1.x, env.p1.y, env.p2.x, env.p2.y, 250, 400 );
      c.stroke();
      c.closePath();

      // Control Points
      c.fillRect( env.p1.x - 3, env.p1.y -3, 6, 6);
      c.fillRect( env.p2.x - 3, env.p2.y -3, 6, 6);

      // Control Paths (theory?)
      c.lineWidth = 1;

      c.beginPath();
      c.moveTo( 250, 100);
      c.lineTo( env.p1.x, env.p1.y );
      c.lineTo( env.p2.x, env.p2.y );
      c.lineTo( 250, 400 );
      c.stroke();
      c.closePath();
   }

}
