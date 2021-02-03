import './App.scss';
import RightBar from './components/rightbar/RightBar';

function App() {
  return (
    <div className="App">
      <div className="grid-container main-container">
        <div className="left-bar">
        </div>
        <div className="main-section">

        </div>
        <div className="right-bar">
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;
