import './App.css';
import {Guitar} from './guitar/Guitar';

function App() {
  const strings = ['E5', 'B4', 'G4', 'D4', 'A3', 'E3'];
  return (
    <div className="App"> 
      <Guitar strings={strings}/>
    </div>
  );
}

export default App;
