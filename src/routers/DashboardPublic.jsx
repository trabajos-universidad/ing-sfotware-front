import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './../components/ui/Navbar';
import { HomePage } from './../components/home/HomePage';
import { HistoriaPage } from './../components/historia/HistoriaPage';
import { CatalogoPage } from './../components/catalogo/CatalogoPage';
import { LoginPage } from './../components/login/LoginPage';
import { Footer } from './../components/ui/Footer'
export const DashboardPublic = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [])
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="historia" element={<HistoriaPage />} />
          <Route path="catalogo" element={<CatalogoPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
