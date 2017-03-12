import { GameContext } from "./game-context";
import { Debugger } from "./debugger";

export abstract class GameRenderer {

    private gridColor           : string = "black";
    private gridBackgroundColor : string = "white";
    private gridSize            : number = 50;
    private gridFontSize        : number = 10;

    public constructor( protected context : GameContext ) {}

    public abstract draw();

    public setGridSize( size : number ) {

        this.gridSize = size;
    }

    public setGridColor( color : string ) {

        this.gridColor = color;
    }

    public clear()  {

        let context = this.context.getRenderingContext();
        let canvasWidth  = parseFloat( this.context.getCanvasElement().getAttribute( 'width' ) );
        let canvasHeight = parseFloat( this.context.getCanvasElement().getAttribute( 'height' ) );

        context.clearRect( 0, 0, canvasWidth, canvasHeight );
    }

    public setGridFontSize( size : number ) {

        this.gridFontSize = size;
    }

    public setGridBackgroundColor( color : string ) {

        this.gridBackgroundColor = color;
    }

    protected drawGrid( ) {

        let xProgress = 0;
        let yProgress = 0;

        let gridWidth  = parseFloat ( this.context.getCanvasElement().getAttribute( 'width' ) );
        let gridHeight = parseFloat ( this.context.getCanvasElement().getAttribute( 'height' ) );

        let context = this.context.getRenderingContext();

        // Draw background
        context.fillStyle = this.gridBackgroundColor;
        context.fillRect( 0, 0, gridWidth, gridHeight );

        // Prepare to draw grid
        context.lineWidth = 0.5;
        context.strokeStyle = this.gridColor;
        context.fillStyle = this.gridColor;
        context.font = this.gridFontSize + "px Sans Serif";

        context.moveTo( 0, 0 );

        // Print width lines
        for ( ; xProgress <= gridWidth; xProgress += this.gridSize ) {

            context.beginPath();
            context.moveTo( xProgress, 0 );
            context.lineTo( xProgress, gridHeight );
            context.stroke();
            context.closePath();

            if ( xProgress != 0 ) {
                context.fillText( xProgress.toString(), xProgress + 2, 10 );
            }
        }

        // Print height lines
        for ( ; yProgress <= gridHeight ; yProgress += this.gridSize ) {

            context.beginPath();
            context.moveTo( 0, yProgress );
            context.lineTo( gridWidth, yProgress );
            context.stroke();
            context.closePath();

            if ( yProgress != 0 ) {
                context.fillText( yProgress.toString(), 2, yProgress - 2 );
            }
        }


        context.moveTo( 0, 0 );
    }


}
