import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Post from './Post/Post';
import './Post/Post.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About/About';
import './background.css';
import MainPage from './MainPage/MainPage';
import KeepUp from './KeepUp/KeepUp';



const App = () => {
  return (
  
  <div className="App">
    
    <div className="rectangle"/>
      <img className="Avatar" src="/images/avatar.jpg" alt=""/>
    
  <Router>
     <Menu/>
       
      <section>
        <Route path="/portfolio" exact component={Post} />
      </section>

      <section>
        <Route path="/about" exact component={About} />
      </section>

      <section>
        
        <Route path="/MainPage" exact component={MainPage}/>
       </section>

        <section>
        <Route path="/keepUp" exact component={KeepUp}/>
        </section>

    </Router>
   
      </div>
       
  );
}


export default App;
