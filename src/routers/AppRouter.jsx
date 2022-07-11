import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from './../components/home/HomePage';
import { HistoriaPage } from './../components/historia/HistoriaPage';
import { AdminPage } from './../components/admin/AdminPage';
import { CatalogoPage } from './../components/catalogo/CatalogoPage';
import { Navbar } from "../components/ui/Navbar";
import { LoginPage } from "../components/login/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    </BrowserRouter>
  )
}
