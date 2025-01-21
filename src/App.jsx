import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header';
import HeaderAndUseCases from './component/HeaderFeatures';
import AllPopular from './component/AllPopular';
import Tablexe from './component/Tablexe';
import Footer from './component/Footer';

function App() {
  return (
  <>
      <div className='app'>
      <Navbar />
      <Header/>
      <HeaderAndUseCases/>
      <AllPopular></AllPopular>
      <Tablexe/>
      <Footer/>
      {/* <Routes>
      
      <Route path='/Service'element={}/>
        <Route path='/Product' element={}/>
        <Route path='/About' element={}/>
      </Routes> */}
    </div>
  </>
  );
}

export default App;
