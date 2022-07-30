import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";

const { MainPage } = require("../pages");

export default function Router() {
  const MainPageRoutes = () => {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <MainPageRoutes /> } >
          <Route path="/profile" element={ <MainPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
