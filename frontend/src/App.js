import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Main from './components/Main';
import Playback from './components/Playback';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [data, setData] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [tracklistInfo, setTracklistInfo] = useState({
    image: "",
    title: "",
    info: "",
  });

  const handleSongSelect = (song) => {
    setSelectedSong(song);
    console.log(song);
  };

  const handleSectionChange = (section, data = []) => {
    setActiveSection(section);
    setData(data);
  };

  return (
    <div className="App">
      <Sidebar homeClick={() => handleSectionChange('home')} />
      <Topbar />
      <Main 
      activeSection={activeSection} 
      handleSectionChange={handleSectionChange} 
      handleSongSelect={handleSongSelect} 
      setSelectedSong={setSelectedSong} 
      setTracklistInfo={setTracklistInfo} 
      tracklistInfo={tracklistInfo} />
      <Playback selectedSong={selectedSong} />
    </div>
  );
}

export default App;
