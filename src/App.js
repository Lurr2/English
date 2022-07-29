import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './baseCss/base.module.scss';

import MainLayout from './components/Layouts/MainLayout/MainLayout';

import Onas from './components/Pages/O nas/Onas';
import DlaczegoMy from './components/Pages/Oferta/Oferta';
import Cennik from './components/Pages/Cennik/Cennik';
import Kontakt from './components/Pages/Kontakt/Kontakt';
import ZapiszSie from './components/Pages/ZapiszSie/ZapiszSie';
import Regulamin from './components/Pages/Regulamin/Regulamin';

function App() {
  return (
    <Router basename='/'>
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<Onas/>} />
          <Route path='/oferta' element={<DlaczegoMy />} />
          <Route path='/cennik' element={<Cennik />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/zapisz_sie' element={<ZapiszSie />} />
          <Route path='/regulamin' element={<Regulamin />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
