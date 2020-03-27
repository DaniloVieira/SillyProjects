import React from 'react';
import Previwer from './containers/Previwer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HistoryPanel from './components/historyPanel/HistoryPanel';
import MenuPanel from './components/menu/MenuPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HistoryPanel></HistoryPanel>
      <Previwer></Previwer>
      <MenuPanel></MenuPanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
