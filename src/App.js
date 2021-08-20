import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Navbar} from "./Components/Navbar";
import {Main} from "./Components/Main";
import {Order} from "./Components/Order";
import {About} from "./Components/About";
import {Contact} from "./Components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Route exact path="/" component={Main} />
          <Route path="/order"  component={Order} />
          <Route path="/contact"  component={Contact} />
          <Route path="/about"  component={About} />
      </div>
    </Router>
  );
}

export default App;
