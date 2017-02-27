import { GameController } from "../../../game-engine/game-controller";
import { Debugger } from "../../../game-engine/debugger";

export class HelloWorldController extends GameController {

   private spaceIsDepressed : boolean = false;

   public init() {

      this.context.getInputObserver().keyPressed.subscribe(
          (e) => { if ( e.code == 'Space' ) { this.spaceIsDepressed = true } },
          (err) => Debugger.log( err )
      );

      this.context.getInputObserver().keyReleased.subscribe(
          (e) => { if ( e.code == 'Space' ) { this.spaceIsDepressed = false } },
          (err) => Debugger.log( err )
      );
   }

   public isSpaceDepressed() : boolean {

      return this.spaceIsDepressed;
   }


}
