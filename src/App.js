import { useEffect, useState } from 'react';
import './App.scss';
import Filters from './Filters/Filters.js';
import ProjectContainer from './Projects/ProjectContainer';

function App() {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch('data/project_directory.json');
      const data = await response.json();
      setProjects(data.projects);
    }

    getProjects();
  }, []);

  useEffect(() => {
    if (projects == null) return;

    const games = projects.map(x => x.game);
    const standards = projects.map(x => x.quality);
    const factions = projects.map(x => `${x.game}: ${x.faction}`);

    const filterData = {
      games, standards, factions
    };

    console.log(filterData);

  }, [projects]);

  if (projects === null) {
    return <div>loading projects ... </div>
  }

  return (
    <div className='container'>
      <header>
        <h1>Painting Projects</h1>
        <p>Battle ready armies with parade quality HQs.</p>
      </header>
      <main>
        <Filters />
        <ProjectContainer projects={projects} />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
