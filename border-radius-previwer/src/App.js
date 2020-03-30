import React from 'react';
import Previwer from './containers/Previwer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HistoryPanel from './components/historyPanel/HistoryPanel';
import MenuPanel from './components/menu/MenuPanel';
import Layout from './hoc/layout/Layout';

function App() {
  return (
    <div style={{height: '90%'}} >
      <Layout>
      {/* <div style={{border: 'black solid 1px', backgroundColor: 'red', color: 'white'}}>space1</div> */}
        <Header/>
      {/* <div style={{border: 'black solid 1px', backgroundColor: 'red', color: 'white'}}>space2</div> */}
        <MenuPanel/>
        <Previwer/>
        <HistoryPanel/>
      {/* <div style={{border: 'black solid 1px', backgroundColor: 'red', color: 'white'}}>space3</div> */}
        <Footer/>      
      {/* <div style={{border: 'black solid 1px', backgroundColor: 'red', color: 'white'}}>space4</div> */}
      </Layout>
    </div>
  );
}

export default App;
