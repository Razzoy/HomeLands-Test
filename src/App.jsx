import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage";
import { NoPage } from "./pages/NoPage";
import { HouseDetailsPage } from "./pages/HouseDetailsPage";
import { HousePage } from "./pages/HousePage";
import { LoginPage } from "./pages/LoginPage";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/houses/:id"} element={<HouseDetailsPage />} />
            <Route path={"/houses"} element={<HousePage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/search/:keyword"} element={<SearchPage />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
