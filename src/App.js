import './App.css';
import Box from './components/Box.js';

function App() {
  const boxes = [
  <Box num={0}/>
  ];
  return (
    <div className="App">
      {boxes}
    </div>
  );
}

export default App;
