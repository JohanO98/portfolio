
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Aboutme from './components/About-me';
import Project from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollTotop';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Main />
      <Aboutme />
      <Project />
      <Contact />
      <ScrollToTop/>
    </div>
  );
}

export default App;
