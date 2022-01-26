import React from 'react';
import './App.css';
import Header from './components/header';
import Click from './components/text';
import Logo from './assets/logo.svg';

const App = () => (
  <>
  <Header image={Logo} navItemAdress="https://keremalan.github.io/blog" navItemLabel="Blog"/>
  </>
)

export default App;