import { InputControllerService } from "./input-controller.service";
export class GameContext {

    public constructor( private inputListener : InputControllerService,
                        private renderingContext : CanvasRenderingContext2D ) { }

    public getInputListener() {
        return this.inputListener;
    }

    public getRenderingContext() {
        return this.renderingContext;
    }
}
