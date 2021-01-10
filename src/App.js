import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Gallery from './components/Pages/Gallery';
import Restaurant from './components/Pages/Restaurant';
import Reservation from './components/Pages/Reservation';

function App() {
  return (
   <div>
     <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact  component= {Home}/>
         <Route path='/Gallery' exact  component= {Gallery}/>
         <Route path='/Restaurant' exact  component= {Restaurant}/>
         <Route path='/Reservation' exact  component= {Reservation}/>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
