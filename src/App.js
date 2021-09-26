import './App.css';
import Main from '../src/components/core/main/Main';
import Header from './components/core/header/Header';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
