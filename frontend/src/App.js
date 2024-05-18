import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Main from './components/Main';
import Playback from './components/Playback';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <Main />
      <Playback />
    </div>
  );
}

export default App;
