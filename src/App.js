import React from 'react';
import Header from './components/Header/Header';
import SideСontent from './components/SideСontent/SideСontent';
import Content from './components/Content/Content';
import Video from './components/Video/Video';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SideСontent />
      <Content />
      <Video />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
