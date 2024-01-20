import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Outfits from './components/Outfits/Outfits';
import Wardrobe from './components/Wardrobe/Wardrobe';
import { Container } from '@material-ui/core';
import Auth from './components/Authentication/Auth';

function App() {
  return (
    <>
      <Router>
        <Container maxwidth="xl">
          <Navbar />
          <Switch>
            <Route path='/' exact component={() => (JSON.parse(localStorage.getItem('profile')) ? <Home /> : <Redirect to="/authentication" />)} />
            <Route path='/outfits' component={() => (JSON.parse(localStorage.getItem('profile')) ? <Outfits /> : <Redirect to="/authentication" />)} />
            <Route path='/wardrobe' component={() => (JSON.parse(localStorage.getItem('profile')) ? <Wardrobe /> : <Redirect to="/authentication" />)} />
            <Route path='/authentication' component={() => (!JSON.parse(localStorage.getItem('profile')) ? <Auth /> : <Redirect to="/" />)} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;