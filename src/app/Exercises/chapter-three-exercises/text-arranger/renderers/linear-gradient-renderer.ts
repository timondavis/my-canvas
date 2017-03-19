import { RenderingData } from "./rendering-data";
import { TextArrangerEnvironment } from "../text-arranger-environment";
import { BasicRenderer } from "./basic-renderer";
import { Debugger } from "../../../../game-engine/debugger";
export class LinearGradientRenderer {

    private static centerPointWidth : number = 0.10;

    public static draw( renderingData : RenderingData ) {

    }

    public static fillRender( renderingData : RenderingData ) {

        // Grab the game environment
        let environment = <TextArrangerEnvironment> renderingData.environment;

        // Focus up the center a bit.
        let centerPoint : number = environment.linearGradientCenterPointFill;

        let centerPointLeft : number = ( centerPoint - LinearGradientRenderer.centerPointWidth > 0.0 ) ?
            centerPoint - LinearGradientRenderer.centerPointWidth :
            0.0;

        // Forgive the weird way of adding - strings are getting built instead of math and I cannot understand why.
        let centerPointRight : number = ( ( centerPoint - ( -1 * LinearGradientRenderer.centerPointWidth ) ) < 1.0 ) ?
            centerPoint - ( -1 * LinearGradientRenderer.centerPointWidth ) :
            1.0;

        // Make the gradient
        let fillGradient = renderingData.context.createLinearGradient(
            (renderingData.canvasWidth / 2 ) - (renderingData.messageWidth), 0,
            (renderingData.canvasWidth / 2 ) + (renderingData.messageWidth), 0
        );

        fillGradient.addColorStop( 0, environment.linearGradientLeftColorFill );
        fillGradient.addColorStop( centerPointLeft, environment.linearGradientLeftColorFill );
        fillGradient.addColorStop( environment.linearGradientCenterPointFill, environment.linearGradientCenterColorFill );
        fillGradient.addColorStop( centerPointRight, environment.linearGradientRightColorFill );
        fillGradient.addColorStop( 1.0, environment.linearGradientRightColorFill );

        // Assign gradient and draw the text
        renderingData.context.fillStyle = fillGradient;

        renderingData.context.fillText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }

    public static strokeRender( renderingData : RenderingData ) {

        let environment = <TextArrangerEnvironment> renderingData.environment;

        let centerPoint : number = environment.linearGradientCenterPointStroke;

        let centerPointLeft : number = ( centerPoint - LinearGradientRenderer.centerPointWidth > 0.0 ) ?
            centerPoint - LinearGradientRenderer.centerPointWidth :
            0.0;

        // Forgive the weird way of adding - strings are getting built instead of math and I cannot understand why.
        let centerPointRight : number = ( ( centerPoint - ( -1 * LinearGradientRenderer.centerPointWidth ) ) < 1.0 ) ?
            centerPoint - ( -1 * LinearGradientRenderer.centerPointWidth ) :
            1.0;

        let strokeGradient = renderingData.context.createLinearGradient(
            (renderingData.canvasWidth / 2 ) - (renderingData.messageWidth), 0,
            (renderingData.canvasWidth / 2 ) + (renderingData.messageWidth), 0
        );

        strokeGradient.addColorStop( 0, environment.linearGradientLeftColorStroke );
        strokeGradient.addColorStop( centerPointLeft, environment.linearGradientLeftColorStroke );
        strokeGradient.addColorStop( environment.linearGradientCenterPointStroke, environment.linearGradientCenterColorStroke );
        strokeGradient.addColorStop( centerPointRight, environment.linearGradientRightColorStroke );
        strokeGradient.addColorStop( 1.0, environment.linearGradientRightColorFill );

        renderingData.context.strokeStyle = strokeGradient;

        renderingData.context.strokeText(
            environment.message,
            ( renderingData.canvasWidth / 2 ) - ( renderingData.messageWidth / 2 ),
            ( renderingData.canvasHeight / 2 )
        );
    }




}
