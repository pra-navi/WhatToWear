import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Outfits from './components/Outfits/Outfits';
import Wardrobe from './components/Wardrobe/Wardrobe';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>
      <Router>
        <Container maxwidth="xl">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/outfits' component={Outfits} />
            <Route path='/wardrobe' component={Wardrobe} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;