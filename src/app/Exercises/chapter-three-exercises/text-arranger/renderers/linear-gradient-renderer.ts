import { RenderingData } from "./rendering-data";
import { TextArrangerEnvironment } from "../text-arranger-environment";
import { BasicRenderer } from "./basic-renderer";
export class LinearGradientRenderer {

    public static draw( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        let gradient = renderingData.context.createLinearGradient(
            (renderingData.canvasWidth / 2 ) - (renderingData.messageWidth), 0,
            (renderingData.canvasWidth / 2 ) + (renderingData.messageWidth), 0
        );

        gradient.addColorStop( 0, environment.linearGradientLeftColor );
        gradient.addColorStop( 0.5, environment.linearGradientCenterColor );
        gradient.addColorStop( 1.0, environment.linearGradientRightColor );

        if ( environment.fillOrStroke == 'fill' ) { LinearGradientRenderer.fillRender( renderingData, gradient); }
        else if ( environment.fillOrStroke == 'stroke' ) { LinearGradientRenderer.strokeRender( renderingData ); }
        else { LinearGradientRenderer.fillAndStrokeRender( renderingData, gradient ); }
    }

    private static fillRender( renderingData : RenderingData, gradient : any ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        renderingData.context.fillStyle = gradient;

        renderingData.context.fillText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }

    private static strokeRender( renderingData : RenderingData ) {

        BasicRenderer.draw( renderingData );
    }

    private static fillAndStrokeRender( renderingData : RenderingData, gradient : any ) {


        let environment = <TextArrangerEnvironment> renderingData.environment;



        renderingData.context.fillStyle = gradient;
        renderingData.context.strokeStyle = environment.strokeColor;

        renderingData.context.fillText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
        renderingData.context.strokeText( environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ), ( renderingData.canvasHeight / 2 ) );
    }
}
