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
        <h3>
          {index + 1} из {sculptureList.length}
        </h3>
        <div className={style.btns}>
          <button onClick={handlePrevClick} disabled={!hasPrev}>
            Previous
          </button>
          <button onClick={handleNextClick} disabled={!hasNext}>
            Next
          </button>
        </div>
      </nav>
      <h2>
        <i>{sculpture.name}</i>
        <br></br>
        <img src={sculpture.url} alt={sculpture.alt} style={{ maxWidth: 50 }} />
        <br></br>
        Услуги: {sculpture.artist}
      </h2>
      <p>{sculpture.description}</p>
      <button type="button" className={style.btnCall}>
        Заказать
      </button>
    </div>
  );
}
