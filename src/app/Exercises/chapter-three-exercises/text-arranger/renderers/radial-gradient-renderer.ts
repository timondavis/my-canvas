import { RenderingData } from "./rendering-data";
import { TextArrangerEnvironment } from "../text-arranger-environment";
export class RadialGradientRenderer {

    public static fillRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        let gradient = renderingData.context.createRadialGradient(
            renderingData.canvasWidth / 2, renderingData.canvasHeight / 2, renderingData.messageWidth * 0.10,
            renderingData.canvasWidth / 2, renderingData.canvasHeight / 2, renderingData.messageWidth * 0.70
        );

        gradient.addColorStop( 0, environment.radialGradientOutsideColorFill );
        gradient.addColorStop( 0.20, environment.radialGradientOutsideColorFill );
        gradient.addColorStop( 0.50, environment.radialGradientCenterColorFill );
        gradient.addColorStop( 0.80, environment.radialGradientInsideColorFill );
        gradient.addColorStop( 1, environment.radialGradientInsideColorFill );

        renderingData.context.fillStyle = gradient;

        renderingData.context.fillText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }

    public static strokeRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        let gradient = renderingData.context.createRadialGradient(
            renderingData.canvasWidth / 2, renderingData.canvasHeight / 2, renderingData.messageWidth * 0.10,
            renderingData.canvasWidth / 2, renderingData.canvasHeight / 2, renderingData.messageWidth * 0.70
        );

        gradient.addColorStop( 0, environment.radialGradientOutsideColorStroke );
        gradient.addColorStop( 0.20, environment.radialGradientOutsideColorStroke );
        gradient.addColorStop( 0.50, environment.radialGradientCenterColorStroke );
        gradient.addColorStop( 0.80, environment.radialGradientInsideColorStroke );
        gradient.addColorStop( 1, environment.radialGradientInsideColorStroke );

        renderingData.context.strokeStyle = gradient;

        renderingData.context.strokeText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }
}
