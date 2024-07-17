import Navbar from "./components/navbar"
import About from "./components/about"
import Team from "./components/team"
import Home from "./components/home"
import Contact from "./components/contact"
import './App.css';

function App() {
  let component
  switch (window.location.pathname){
    case "/mari":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case"/team":
      component = <Team />
      break
    case"/contact":
      component = <Contact />
      break
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
