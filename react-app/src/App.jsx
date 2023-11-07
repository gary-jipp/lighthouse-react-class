import {useState} from 'react';
import './App.css';
import MyClassComponent from './components/MyClassComponent';

// Stateless Component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Hello React Class</h2>

      <MyClassComponent text="Some Text"/>
    </div>
  );
}

export default App;
