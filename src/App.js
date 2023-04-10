import './App.css';
import './reset.css';
import Header from './components/Header';
import Card from './components/Card';
import Bumper from './components/Bumper';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bumper/>
      <div className="card-holder">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
