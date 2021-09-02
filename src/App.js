import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Navbar} from "./Components/Navbar";
import {Main_page} from "./Components/Main_page";
import {Order_page} from "./Components/Order_page";
import {About} from "./Components/About";
import {Contact} from "./Components/Contact";
import {Order_Confirmation} from "./Components/Order_Confirmation"


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Route exact path="/" component={Main_page} />
          <Route path="/order"  component={Order_page} />
          <Route path="/contact"  component={Contact} />
          <Route path="/about"  component={About} />
          <Route path="/confirmation"  component={Order_Confirmation} />
      </div>
    </Router>
  );
}

export default App;
