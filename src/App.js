import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './baseCss/base.module.scss';

import MainLayout from './components/Layouts/MainLayout/MainLayout';

import DlaczegoMy from './components/Pages/DlaczegoMy/DlaczegoMy';
import Oferta from './components/Pages/Oferta/Oferta';
import Opinie from './components/Pages/Opinie/Opinie';
import Kontakt from './components/Pages/Kontakt/Kontakt';
import ZapiszSie from './components/Pages/ZapiszSie/ZapiszSie';
import Regulamin from './components/Pages/Regulamin/Regulamin';

function App() {
  return (
    <Router basename='/'>
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<DlaczegoMy/>} />
          <Route path='/oferta' element={<Oferta />} />
          <Route path='/opinie' element={<Opinie />} />
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
