import { TextArrangerEnvironment } from "../text-arranger-environment";
import { RenderingData } from "./rendering-data";

export class BasicRenderer {

    public static draw( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;


        if ( environment.fillOrStroke == 'fill' )           { BasicRenderer.fillRender( renderingData ); }
        else if ( environment.fillOrStroke == 'stroke' )    { BasicRenderer.strokeRender( renderingData ); }
        else                                                { BasicRenderer.fillAndStrokeRender( renderingData ); }
    }

    private static fillRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        renderingData.context.fillStyle = environment.fillColor;

        renderingData.context.fillText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }

    private static strokeRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        renderingData.context.strokeStyle = environment.strokeColor;

        renderingData.context.strokeText( environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ), ( renderingData.canvasHeight / 2 ) );
    }

    private static fillAndStrokeRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        renderingData.context.fillStyle = environment.fillColor;
        renderingData.context.strokeStyle = environment.strokeColor;

        renderingData.context.fillText( environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ), ( renderingData.canvasHeight / 2 ) );
        renderingData.context.strokeText( environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ), ( renderingData.canvasHeight / 2 ) );
    }
}
