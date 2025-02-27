import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { UserContextProvider } from "../context/userContext";
import style from "./MainLayout.module.scss";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";


export default function MainLayout() {

  const location = useLocation();

  const showHeroImage = location.pathname === "/" || location.pathname.includes("/houses/");


  return (
    <div className={style.mainLayout}>
      <UserContextProvider>
        <Header />
        <Hero showImage={showHeroImage} />
        <div className={style.children}>
          <Outlet />
        </div>
        <Footer />
      </UserContextProvider>
    </div>
  );
}
