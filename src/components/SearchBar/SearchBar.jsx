import { useState } from "react";
import style from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function SearchBar() {
  const [searchWord, setSearchWord] = useState();

  return (
    <div className={style.searchBarStyling}>
      <input
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        value={searchWord}
        type="text"
        placeholder="Indtast søgeord"
      />
      <NavLink to={`/search/${searchWord}`}>
        <div className={style.searchIconContainer}>
          <FaSearch />
        </div>
      </NavLink>
    </div>
  );
}
