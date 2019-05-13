import React from 'react';
import RouterView from './router/RouterView'
import {BrowserRouter as Router, NavLink, Redirect} from 'react-router-dom'
import routerLink from './router/RouterLink'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <RouterView data={routerLink.routes}>
          <Redirect from="/" to="/index"></Redirect>
        </RouterView>
        <NavLink to="/index">电影</NavLink>
        <NavLink to="/cinema">影院</NavLink>
        <NavLink to="/myCenter">我的</NavLink>
      </div>
    </Router>
  );
}

export default App;
