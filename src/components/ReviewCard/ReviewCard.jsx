import { useState } from "react";
import style from "./ReviewCard.module.scss";
import { useGet } from "../../hooks/useGet";

export function ReviewCard() {
  const [hasClicked, setHasClicked] = useState(false);

  const showComment = () => {
    if (!hasClicked) {
      setHasClicked(true);
    }
  };

    const { data, isLoading, error } = useGet("https://api.mediehuset.net/homelands/reviews");




  return (
    <>
      <div className={style.reviewContainer}>
        <div className={style.review} onClick={showComment}></div>
        
        <div 
          className={`${style.comment} ${hasClicked ? style.commentVisible : ''}`}
        >
          
        </div>
      </div>
      <span className={`${style.ptag} ${hasClicked ? style.hideThis : ''}`}>
        <p onClick={showComment}>Skriv en anmeldelse</p>
      </span>
    </>
  );
}
