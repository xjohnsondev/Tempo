import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Main from './components/Main';
import Playback from './components/Playback';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [data, setData] = useState([]);


  const handleSectionChange = (section, data = []) => {
    setActiveSection(section);
    setData(data);
  };

  return (
    <div className="App">
      <Sidebar homeClick={() => handleSectionChange('home')} />
      <Topbar />
      <Main activeSection={activeSection} handleSectionChange={handleSectionChange}/>
      <Playback />
    </div>
  );
}

export default App;
