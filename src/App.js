import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { BUY } from './buy';
import HOME from './home';
import NewLog from './newLog';
import PRODUCT from './product';
import { TextProvider } from './provider';
import NAV from './nav';
import PERSON from './person';

function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/';
   const home=useNavigate()
   
   return (
    <TextProvider>
      {!hideNav && <NAV />}
      <Routes>
        <Route path='/' element={<NewLog />} />
        <Route path='/home' element={<HOME />} />
        <Route path='/product' element={<PRODUCT />} />
        <Route path='/buy' element={<BUY />} />
        <Route path='/person' element={<PERSON />} />
      </Routes>
    </TextProvider>
  );
}

export default App;
