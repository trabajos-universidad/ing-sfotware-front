import { Routes, Route } from 'react-router-dom';
import { Navbar } from './../components/ui/Navbar';
import { HomePage } from './../components/home/HomePage';
import { HistoriaPage } from './../components/historia/HistoriaPage';
import { CatalogoPage } from './../components/catalogo/CatalogoPage';
import { LoginPage } from './../components/login/LoginPage';
import { Footer } from './../components/ui/Footer'
export const DashboardPublic = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="historia" element={<HistoriaPage />} />
          <Route path="catalogo" element={<CatalogoPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
