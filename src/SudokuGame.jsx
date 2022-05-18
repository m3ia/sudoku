import "./SudokuGame.css";

const r1c1 = "X";
const r1c2 = 9;
const r1c3 = 7;
const r1c4 = "X";
const r1c5 = 6;
const r1c6 = "X";
const r1c7 = 2;
const r1c8 = 1;
const r1c9 = "X";
const r2c1 = 5;
const r2c2 = "X";
const r2c3 = "X";
const r2c4 = "X";
const r2c5 = 2;
const r2c6 = "X";
const r2c7 = "X";
const r2c8 = "X";
const r2c9 = 3;
const r3c1 = "X";
const r3c2 = "X";
const r3c3 = 3;
const r3c4 = 8;
const r3c5 = "X";
const r3c6 = "X";
const r3c7 = 7;
const r3c8 = "X";
const r3c9 = "X";
const r4c1 = "X";
const r4c2 = "X";
const r4c3 = "X";
const r4c4 = "X";
const r4c5 = "X";
const r4c6 = "X";
const r4c7 = 5;
const r4c8 = "X";
const r4c9 = "X";
const r5c1 = 7;
const r5c2 = 8;
const r5c3 ="X"; 
const r5c4 = "X";
const r5c5 = "X";
const r5c6 = "X";
const r5c7 = "X";
const r5c8 = 4;
const r5c9 = 6;
const r6c1 = "X";
const r6c2 = "X";
const r6c3 = 1;
const r6c4 = "X";
const r6c5 = "X";
const r6c6 = "X";
const r6c7 = "X";
const r6c8 = "X";
const r6c9 = "X";
const r7c1 = "X";
const r7c2 = "X";
const r7c3 = 2;
const r7c4 = "X";
const r7c5 = "X";
const r7c6 = 4;
const r7c7 = 9;
const r7c8 = "X";
const r7c9 = "X";
const r8c1 = 4;
const r8c2 = "X";
const r8c3 = "X";
const r8c4 = "X";
const r8c5 = 1;
const r8c6 = "X";
const r8c7 = "X";
const r8c8 = "X";
const r8c9 = 8;
const r9c1 = "X";
const r9c2 = 6;
const r9c3 = 8;
const r9c4 = "X";
const r9c5 = 7;
const r9c6 = "X";
const r9c7 = 1;
const r9c8 = 5;
const r9c9 = "X";


function SudokuGame({ gameData }) {
    return (
        <div>
            I am a sudoku game!
            {gameData}
            <div className="game-grid-row" id="row-1">
                <div className= "mini-grid" id= "mini-grid-1">
                    <div className="mg-cell" id="mg-1-top-left">{r1c1}</div>
                    <div className="mg-cell" id="mg-1-top-center">{r1c2}</div>
                    <div className="mg-cell" id="mg-1-top-right">{r1c3}</div>
                    <div className="mg-cell" id="mg-1-mid-left">{r2c1}</div>
                    <div className="mg-cell" id="mg-1-mid-center">{r2c2}</div>
                    <div className="mg-cell" id="mg-1-mid-right">{r2c3}</div>
                    <div className="mg-cell" id="mg-1-bottom-left">{r3c1}</div>
                    <div className="mg-cell" id="mg-1-bottom-center">{r3c2}</div>
                    <div className="mg-cell" id="mg-1-bottom-right">{r3c3}</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-2">
                    <div className="mg-cell" id="mg-2-top-left">{r1c4}</div>
                    <div className="mg-cell" id="mg-2-top-center">{r1c5}</div>
                    <div className="mg-cell" id="mg-2-top-right">{r1c6}</div>
                    <div className="mg-cell" id="mg-2-mid-left">{r2c4}</div>
                    <div className="mg-cell" id="mg-2-mid-center">{r2c5}</div>
                    <div className="mg-cell" id="mg-2-mid-right">{r2c6}</div>
                    <div className="mg-cell" id="mg-2-bottom-left">{r3c4}</div>
                    <div className="mg-cell" id="mg-2-bottom-center">{r3c5}</div>
                    <div className="mg-cell" id="mg-2-bottom-right">{r3c6}</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-3">
                    <div className="mg-cell" id="mg-3-top-left">{r1c7}</div>
                    <div className="mg-cell" id="mg-3-top-center">{r1c8}</div>
                    <div className="mg-cell" id="mg-3-top-right">{r1c9}</div>
                    <div className="mg-cell" id="mg-3-mid-left">{r2c7}</div>
                    <div className="mg-cell" id="mg-3-mid-center">{r2c8}</div>
                    <div className="mg-cell" id="mg-3-mid-right">{r2c9}</div>
                    <div className="mg-cell" id="mg-3-bottom-left">{r3c7}</div>
                    <div className="mg-cell" id="mg-3-bottom-center">{r3c8}</div>
                    <div className="mg-cell" id="mg-3-bottom-right">{r3c9}</div>
                </div>
            </div>
            <div className="game-grid-row" id="row-2">
                <div className= "mini-grid" id= "mini-grid-4">
                    <div className="mg-cell" id="mg-4-top-left">{r4c1}</div>
                    <div className="mg-cell" id="mg-4-top-center">{r4c2}</div>
                    <div className="mg-cell" id="mg-4-top-right">{r4c3}</div>
                    <div className="mg-cell" id="mg-4-mid-left">{r5c1}</div>
                    <div className="mg-cell" id="mg-4-mid-center">{r5c2}</div>
                    <div className="mg-cell" id="mg-4-mid-right">{r5c3}</div>
                    <div className="mg-cell" id="mg-4-bottom-left">{r6c1}</div>
                    <div className="mg-cell" id="mg-4-bottom-center">{r6c2}</div>
                    <div className="mg-cell" id="mg-4-bottom-right">{r6c3}</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-5">
                    <div className="mg-cell" id="mg-5-top-left">{r4c4}</div>
                    <div className="mg-cell" id="mg-5-top-center">{r4c5}</div>
                    <div className="mg-cell" id="mg-5-top-right">{r4c6}</div>
                    <div className="mg-cell" id="mg-5-mid-left">{r5c4}</div>
                    <div className="mg-cell" id="mg-5-mid-center">{r5c5}</div>
                    <div className="mg-cell" id="mg-5-mid-right">{r5c6}</div>
                    <div className="mg-cell" id="mg-5-bottom-left">{r6c4}</div>
                    <div className="mg-cell" id="mg-5-bottom-center">{r6c5}</div>
                    <div className="mg-cell" id="mg-5-bottom-right">{r6c6}</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-6">
                    <div className="mg-cell" id="mg-6-top-left">{r4c7}</div>
                    <div className="mg-cell" id="mg-6-top-center">{r4c8}</div>
                    <div className="mg-cell" id="mg-6-top-right">{r4c9}</div>
                    <div className="mg-cell" id="mg-6-mid-left">{r5c7}</div>
                    <div className="mg-cell" id="mg-6-mid-center">{r5c8}</div>
                    <div className="mg-cell" id="mg-6-mid-right">{r5c9}</div>
                    <div className="mg-cell" id="mg-6-bottom-left">{r6c7}</div>
                    <div className="mg-cell" id="mg-6-bottom-center">{r6c8}</div>
                    <div className="mg-cell" id="mg-6-bottom-right">{r6c9}</div>
                </div>
            </div>
            <div className="game-grid-row" id="row-3">
                <div className= "mini-grid" id= "mini-grid-7">
                    <div className="mg-cell" id="mg-7-top-left">{r7c1}</div>
                    <div className="mg-cell" id="mg-7-top-center">{r7c2}</div>
                    <div className="mg-cell" id="mg-7-top-right">{r7c3}</div>
                    <div className="mg-cell" id="mg-7-mid-left">{r8c1}</div>
                    <div className="mg-cell" id="mg-7-mid-center">{r8c2}</div>
                    <div className="mg-cell" id="mg-7-mid-right">{r8c3}</div>
                    <div className="mg-cell" id="mg-7-bottom-left">{r9c1}</div>
                    <div className="mg-cell" id="mg-7-bottom-center">{r9c2}</div>
                    <div className="mg-cell" id="mg-7-bottom-right">{r9c3}</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-8">
                    <div className="mg-cell" id="mg-8-top-left">{r7c4}</div>
                    <div className="mg-cell" id="mg-8-top-center">{r7c5}</div>
                    <div className="mg-cell" id="mg-8-top-right">{r7c6}</div>
                    <div className="mg-cell" id="mg-8-mid-left">{r8c4}</div>
                    <div className="mg-cell" id="mg-8-mid-center">{r8c5}</div>
                    <div className="mg-cell" id="mg-8-mid-right">{r8c6}</div>
                    <div className="mg-cell" id="mg-8-bottom-left">{r9c4}</div>
                    <div className="mg-cell" id="mg-8-bottom-center">{r9c5}</div>
                    <div className="mg-cell" id="mg-8-bottom-right">{r9c6}</div>
                </div>
                <div className= "mini-grid" id= "mini-grid-9">
                    <div className="mg-cell" id="mg-9-top-left">{r7c7}</div>
                    <div className="mg-cell" id="mg-9-top-center">{r7c8}</div>
                    <div className="mg-cell" id="mg-9-top-right">{r7c9}</div>
                    <div className="mg-cell" id="mg-9-mid-left">{r8c7}</div>
                    <div className="mg-cell" id="mg-9-mid-center">{r8c8}</div>
                    <div className="mg-cell" id="mg-9-mid-right">{r8c9}</div>
                    <div className="mg-cell" id="mg-9-bottom-left">{r9c7}</div>
                    <div className="mg-cell" id="mg-9-bottom-center">{r9c8}</div>
                    <div className="mg-cell" id="mg-9-bottom-right">{r9c9}</div>
                </div>
            </div>
        </div>
    )
}

export { SudokuGame };