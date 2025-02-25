import style from "./Card.module.scss";

export function Card({ title, text, alt, children, cardClick, imageSrc }) {


  const capitalizeFirstLetter = (string) => 
    string.charAt(0).toLocaleUpperCase('da-DK') + string.slice(1);


  return (
    <div className={style.cardStyling} onClick={cardClick}>
      <div className={style.imageContainer}>
      {imageSrc && <img src={imageSrc} alt={alt}/>}
      </div>
      <article>
      <h5>{title && capitalizeFirstLetter(title)}</h5>
      <p>{text && text}</p>
      {children}
      </article>
    </div>
  );
}