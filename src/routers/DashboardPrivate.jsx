import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './../components/admin/AdminPage';

export const DashboardPrivate = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
    </Routes>
  )
}
