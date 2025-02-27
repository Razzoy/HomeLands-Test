import { Hero } from "../Hero/Hero";
import { NavBar } from "../NavBar/NavBar";
import { SearchBar } from "../SearchBar/SearchBar";
import style from "./Header.module.scss";

export function Header() {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.headerStyling}>
          <div className={style.logo}>
            <h1>HomeLands</h1>
          </div>
          <div className={style.navAndSearch}>
            <NavBar />
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}
