
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Headers from './components/headers/Headers';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Stats from './components/stats/Stats';


function App() {
  return (
    <div >
      <Headers />
        <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
        </main>
      
    </div>
  );
}

export default App;
