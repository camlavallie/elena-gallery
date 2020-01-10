import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Gallery from './components/Gallery'
import Home from './components/Home'
import Watercolor from './components/Watercolor'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <div>
    <Navbar />
  
    <div className="text-center">
    <Route exact path="/" component={Home}/>
    <Switch>
    <Route exact path="/gallery" component={Gallery}/>
    </Switch>
    <Switch>
    <Route exact path="/watercolor" component={Watercolor}/>
    </Switch>
  </div>

   <div class="flex mb-4 mt-24 text-center">
        <div class="w-full h-3 ">
          <p class="text-center text-gray-800 text-xs">
    &copy;{new Date().getFullYear()} Elena Kathryn
  </p>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
