import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './../components/home/HomePage';
import { DashboardPublic } from './DashboardPublic';
import { DashboardPrivate } from './DashboardPrivate';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes} from './PublicRoutes'

export const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <PublicRoutes>
            <DashboardPublic/>
          </PublicRoutes>
        } />

        <Route path="/admin/*" element={
          <PrivateRoutes>
            <DashboardPrivate/>
          </PrivateRoutes>
        } />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
