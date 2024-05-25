import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Main from './components/Main';
import Playback from './components/Playback';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Sidebar handleSectionChange={handleSectionChange} activeSection={activeSection} />
      <Topbar />
      <Main activeSection={activeSection} handleSectionChange={handleSectionChange}/>
      <Playback />
    </div>
  );
}

export default App;
