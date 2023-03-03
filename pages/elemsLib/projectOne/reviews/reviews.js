import style from "./reviews.module.scss";
import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <div className={style.reviewsContainer}>
      <nav className={style.nav}>
        <h2 className={style.h2}>Отзывы</h2>
        <div className={style.btns}>
          <button
            onClick={handlePrevClick}
            disabled={!hasPrev}
            className={style.btnPrev}
          >
            назад
          </button>
          <button
            onClick={handleNextClick}
            disabled={!hasNext}
            className={style.btnNext}
          >
            вперед
          </button>
        </div>
      </nav>

      <div className={style.person}>
        <img
          src={sculpture.url}
          alt={sculpture.alt}
          style={{ maxWidth: 50 }}
          className={style.avatar}
        />
        <h2 className={style.avatarName}>
          <i>{sculpture.name}</i>
        </h2>
      </div>

      <h3 className={style.h3}>Услуги: {sculpture.artist}</h3>

      <p>{sculpture.description}</p>
      <button type="button" className={style.btnCall}>
        Заказать
      </button>
    </div>
  );
}
