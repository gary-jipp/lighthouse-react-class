import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Hello React Class</h2>
      {count}
       <button onClick={() => setCount(count + 1)}>+</button>
       <button onClick={() => setCount(0)}>0</button>
    </div>
  );
}

export default App;
