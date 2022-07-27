import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './baseCss/base.module.scss';

import MainLayout from './components/Layouts/MainLayout/MainLayout';

import Onas from './components/Pages/O nas/Onas';
import DlaczegoMy from './components/Pages/DlaczegoMy/DlaczegoMy';
import Cennik from './components/Pages/Cennik/Cennik';
import Kontakt from './components/Pages/Kontakt/Kontakt';

function App() {
  return (
    <Router basename='/'>
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<Onas/>} />
          <Route path='/dlaczego_my' element={<DlaczegoMy />} />
          <Route path='/cennik' element={<Cennik />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
