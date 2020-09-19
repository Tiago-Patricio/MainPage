import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import './Post/Post.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About/About';
import './background.css';
import Post from './Post/Post';
import KeepUp from './KeepUp/KeepUp';
import MoreAbout from './About/MoreAbout';





const App = () => {
  return (
  
  <div className="App">
 
  <Router>
    <Menu/>
    <Switch>
      <Route path='/' exact component={About}/>   
      <Route path='/moreabout' exact component={MoreAbout}/>  
      <Route path='/portfolio' component={Post}/>     
      <Route path='/keepup' component={KeepUp}/>
     </Switch>    
  </Router>


   
      </div>
       
  );
}


export default App;
