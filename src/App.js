
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Aboutme from './components/About-me';
import Project from './components/Projects';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Main />
      <Aboutme />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
