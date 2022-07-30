import { Outlet } from 'react-router-dom';
import { Navbar } from '../sections';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout;