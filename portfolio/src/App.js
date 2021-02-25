import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Container from '@material-ui/core/Container';
import './App.css';



function App() {
  return (
    <Router>
      <Container maxWidth='xl' disableGutters={true}>
        <Header />
        
      </Container>
    </Router>
  );
}

export default App;
