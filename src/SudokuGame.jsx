import "./SudokuGame.css";

function SudokuGame({ gameData }) {
    return (
        <div>
            I am a sudoku game!
            {gameData}
            <div className="game-grid-row" id="row-1">
                <div className= "mini-grid" id= "mini-grid-1">
                    <div className="mg-cell" id="mg-1-top-left">1</div>
                    <div className="mg-cell" id="mg-1-top-center">2</div>
                    <div className="mg-cell" id="mg-1-top-right">3</div>
                    <div className="mg-cell" id="mg-1-mid-left">4</div>
                    <div className="mg-cell" id="mg-1-mid-center">5</div>
                    <div className="mg-cell" id="mg-1-mid-right">6</div>
                    <div className="mg-cell" id="mg-1-bottom-left">7</div>
                    <div className="mg-cell" id="mg-1-bottom-center">8</div>
                    <div className="mg-cell" id="mg-1-bottom-right">9</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-2">
                    <div className="mg-cell" id="mg-2-top-left">1</div>
                    <div className="mg-cell" id="mg-2-top-center">2</div>
                    <div className="mg-cell" id="mg-2-top-right">3</div>
                    <div className="mg-cell" id="mg-2-mid-left">4</div>
                    <div className="mg-cell" id="mg-2-mid-center">5</div>
                    <div className="mg-cell" id="mg-2-mid-right">6</div>
                    <div className="mg-cell" id="mg-2-bottom-left">7</div>
                    <div className="mg-cell" id="mg-2-bottom-center">8</div>
                    <div className="mg-cell" id="mg-2-bottom-right">9</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-3">
                    <div className="mg-cell" id="mg-3-top-left">1</div>
                    <div className="mg-cell" id="mg-3-top-center">2</div>
                    <div className="mg-cell" id="mg-3-top-right">3</div>
                    <div className="mg-cell" id="mg-3-mid-left">4</div>
                    <div className="mg-cell" id="mg-3-mid-center">5</div>
                    <div className="mg-cell" id="mg-3-mid-right">6</div>
                    <div className="mg-cell" id="mg-3-bottom-left">7</div>
                    <div className="mg-cell" id="mg-3-bottom-center">8</div>
                    <div className="mg-cell" id="mg-3-bottom-right">9</div>
                </div>
            </div>
            <div className="game-grid-row" id="row-2">
                <div className= "mini-grid" id= "mini-grid-4">
                    <div className="mg-cell" id="mg-4-top-left">1</div>
                    <div className="mg-cell" id="mg-4-top-center">2</div>
                    <div className="mg-cell" id="mg-4-top-right">3</div>
                    <div className="mg-cell" id="mg-4-mid-left">4</div>
                    <div className="mg-cell" id="mg-4-mid-center">5</div>
                    <div className="mg-cell" id="mg-4-mid-right">6</div>
                    <div className="mg-cell" id="mg-4-bottom-left">7</div>
                    <div className="mg-cell" id="mg-4-bottom-center">8</div>
                    <div className="mg-cell" id="mg-4-bottom-right">9</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-5">
                    <div className="mg-cell" id="mg-5-top-left">1</div>
                    <div className="mg-cell" id="mg-5-top-center">2</div>
                    <div className="mg-cell" id="mg-5-top-right">3</div>
                    <div className="mg-cell" id="mg-5-mid-left">4</div>
                    <div className="mg-cell" id="mg-5-mid-center">5</div>
                    <div className="mg-cell" id="mg-5-mid-right">6</div>
                    <div className="mg-cell" id="mg-5-bottom-left">7</div>
                    <div className="mg-cell" id="mg-5-bottom-center">8</div>
                    <div className="mg-cell" id="mg-5-bottom-right">9</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-6">
                    <div className="mg-cell" id="mg-6-top-left">1</div>
                    <div className="mg-cell" id="mg-6-top-center">2</div>
                    <div className="mg-cell" id="mg-6-top-right">3</div>
                    <div className="mg-cell" id="mg-6-mid-left">4</div>
                    <div className="mg-cell" id="mg-6-mid-center">5</div>
                    <div className="mg-cell" id="mg-6-mid-right">6</div>
                    <div className="mg-cell" id="mg-6-bottom-left">7</div>
                    <div className="mg-cell" id="mg-6-bottom-center">8</div>
                    <div className="mg-cell" id="mg-6-bottom-right">9</div>
                </div>
            </div>
            <div className="game-grid-row" id="row-3">
                <div className= "mini-grid" id= "mini-grid-7">
                    <div className="mg-cell" id="mg-7-top-left">1</div>
                    <div className="mg-cell" id="mg-7-top-center">2</div>
                    <div className="mg-cell" id="mg-7-top-right">3</div>
                    <div className="mg-cell" id="mg-7-mid-left">4</div>
                    <div className="mg-cell" id="mg-7-mid-center">5</div>
                    <div className="mg-cell" id="mg-7-mid-right">6</div>
                    <div className="mg-cell" id="mg-7-bottom-left">7</div>
                    <div className="mg-cell" id="mg-7-bottom-center">8</div>
                    <div className="mg-cell" id="mg-7-bottom-right">9</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-8">
                    <div className="mg-cell" id="mg-8-top-left">1</div>
                    <div className="mg-cell" id="mg-8-top-center">2</div>
                    <div className="mg-cell" id="mg-8-top-right">3</div>
                    <div className="mg-cell" id="mg-8-mid-left">4</div>
                    <div className="mg-cell" id="mg-8-mid-center">5</div>
                    <div className="mg-cell" id="mg-8-mid-right">6</div>
                    <div className="mg-cell" id="mg-8-bottom-left">7</div>
                    <div className="mg-cell" id="mg-8-bottom-center">8</div>
                    <div className="mg-cell" id="mg-8-bottom-right">9</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-9">
                    <div className="mg-cell" id="mg-9-top-left">1</div>
                    <div className="mg-cell" id="mg-9-top-center">2</div>
                    <div className="mg-cell" id="mg-9-top-right">3</div>
                    <div className="mg-cell" id="mg-9-mid-left">4</div>
                    <div className="mg-cell" id="mg-9-mid-center">5</div>
                    <div className="mg-cell" id="mg-9-mid-right">6</div>
                    <div className="mg-cell" id="mg-9-bottom-left">7</div>
                    <div className="mg-cell" id="mg-9-bottom-center">8</div>
                    <div className="mg-cell" id="mg-9-bottom-right">9</div>
                </div>
            </div>
        </div>
    )
}

export { SudokuGame };