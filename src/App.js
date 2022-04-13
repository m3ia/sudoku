import './App.css';
import {SudokuGame} from './SudokuGame';


const gameData = "gameData goes here";
function App() {
  return (
    <div className="App">
      <SudokuGame gameData = {gameData} />
    </div>
  );
}

export default App;
