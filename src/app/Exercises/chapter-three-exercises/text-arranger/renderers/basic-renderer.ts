import { TextArrangerEnvironment } from "../text-arranger-environment";
import { RenderingData } from "./rendering-data";

export class BasicRenderer {

    public static draw( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;
    }

    public static fillRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        renderingData.context.fillStyle = environment.fillColor;

        renderingData.context.fillText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }

    public static strokeRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        renderingData.context.strokeStyle = environment.strokeColor;

        renderingData.context.strokeText( environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ), ( renderingData.canvasHeight / 2 ) );
    }
}
