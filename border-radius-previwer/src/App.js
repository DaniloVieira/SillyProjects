import React from 'react';
import Previwer from './containers/Previwer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HistoryPanel from './components/historyPanel/HistoryPanel';
import MenuPanel from './components/menu/MenuPanel';
import Layout from './hoc/layout/Layout';

function App() {
  return (
    <div style={{display: 'flex',  justifyContent: 'space-between'}}>
      <div></div>
      <Layout>
        <Header/>
        <MenuPanel/>
        <Previwer/>
        <HistoryPanel/>
        <Footer/>      
      </Layout>
      <div></div>
    </div>
  );
}

export default App;
