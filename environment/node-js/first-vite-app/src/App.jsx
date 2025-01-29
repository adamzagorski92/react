import './App.css';

import Heading from './components/Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="React counter" classValue="red" />
        <Heading text="Props is great!" classValue="gray" />
      </header>
      <Counter counterInitValue={20} text='example' />
      <Counter counterInitValue={108}/>
    </div>
  );
}

export default App;
