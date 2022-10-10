import { useEffect } from 'react';
import './App.scss';
import Footer from './Components/Common/Footer';
import Filters from './Components/Filters/Filters.js';
import Header from './Components/Common/Header.js';
import ProjectContainer from './Components/Projects/ProjectContainer';
import usePageData from './Components/Hooks/usePageData';

function App() {

  const data = usePageData('/data/project_directory.json');

  useEffect(() => {
    if (data == null) return;

    const games = data.projects.map(x => x.game);
    const standards = data.projects.map(x => x.quality);
    const factions = data.projects.map(x => `${x.game}: ${x.faction}`);

    const filterData = {
      games, standards, factions
    };

    console.log(filterData);

  }, [data]);

  if (data === null) {
    return <div>loading projects ... </div>
  }

  return (
    <div className='container'>
      <Header />
      <main>
        <Filters />
        <ProjectContainer projects={data.projects} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
