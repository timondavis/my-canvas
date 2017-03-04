import { GameContext } from "./game-context";
import { Debugger } from "./debugger";

export abstract class GameRenderer {

    private gridColor       : string = "black";
    private gridSize        : number = 50;
    private gridFontSize    : number = 10;

    public constructor( protected context : GameContext ) {}

    public abstract draw();

    public setGridSize( size : number ) {

        this.gridSize = size;
    }

    public setGridColor( color : string ) {

        this.gridColor = color;
    }

    public clear( fillStyle : string = "ffffff" ) {

        let context = this.context.getRenderingContext();

        let oldFillStyle = context.fillStyle;
        context.fillStyle = fillStyle;

        context.fillRect( 0, 0, 800, 600 );

        context.fillStyle = oldFillStyle
    }

    public setGridFontSize( size : number ) {

        this.gridFontSize = size;
    }

    protected drawGrid( ) {

        let xProgress = 0;
        let yProgress = 0;

        let context = this.context.getRenderingContext();

        let capturedContext = GameRenderer.cloneContext( context );

        context.lineWidth = 0.5;
        context.strokeStyle = this.gridColor;
        context.fillStyle = this.gridColor;
        context.font = this.gridFontSize + "px Sans Serif";

        context.moveTo( 0, 0 );


        for ( ; xProgress <= 800 ; xProgress += this.gridSize ) {

            context.beginPath();
            context.moveTo( xProgress, 0 );
            context.lineTo( xProgress, 600 );
            context.stroke();
            context.closePath();

            context.fillText( xProgress.toString(), xProgress + 2, 10 );
        }

        for ( ; yProgress <= 600 ; yProgress += this.gridSize ) {

            context.beginPath();
            context.moveTo( 0, yProgress );
            context.lineTo( 800, yProgress );
            context.stroke();
            context.closePath();

            context.fillText( yProgress.toString(), 2, yProgress - 2 );
        }

        GameRenderer.restoreContextSettingsFromClone( context, capturedContext );
    }

    private static cloneContext( context : CanvasRenderingContext2D ) : CanvasRenderingContext2D {

        return JSON.parse( JSON.stringify( context ) );
    }

    private static restoreContextSettingsFromClone( realContext : CanvasRenderingContext2D,
                                             restoreFromContext : CanvasRenderingContext2D ) {

        realContext.lineWidth = restoreFromContext.lineWidth;
        realContext.strokeStyle = restoreFromContext.strokeStyle;
        realContext.fillStyle = restoreFromContext.fillStyle;
        realContext.font = restoreFromContext.font;
        realContext.textBaseline = restoreFromContext.textBaseline;
        realContext.textAlign = restoreFromContext.textAlign;

    }
}
