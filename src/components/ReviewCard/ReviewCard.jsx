import style from './ReviewCard.module.scss'


export function ReviewCard() {
  return (
    <div className={style.reviewContainer}>
        <div className={style.review} onClick={''}>
            
        </div>
        <div className={style.comment}>hide</div>
        <p onClick={''}>Skriv en anmeldelse</p>
    </div>
  )
}
