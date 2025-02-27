import style from "./Hero.module.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Hero({ showImage }) {
  const [imgSrc, setImgSrc] = useState(null);
  const location = useLocation();
  console.log("Current pathname:", location.pathname);

  useEffect(() => {
    if (showImage && location.pathname === "/") {
      setImgSrc(
        "https://api.mediehuset.net/homelands/images/bedroom-2.jpg"
      );
    } else {
      setImgSrc(null);
    }
  }, [showImage]);

  return (
    <div className={style.heroContainer}>
      <div className={style.triangleContainer}>
        <div className={style.leftTriangle}></div>
        <div className={style.rightTriangle}></div>
      </div>

      {showImage && imgSrc && (
        <div className={style.imageContainer}>
          <img src={imgSrc} alt="Hero" className={style.heroImage} />
        </div>
      )}
    </div>
  );
}
