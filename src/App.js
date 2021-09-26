import './App.css';
import Main from '../src/components/core/main/Main';
import Header from './components/core/header/Header';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
