import { getImageUrl } from "./utils.js";
import style from "./playground.module.scss";

function Profile() {
  return (
    <div className={style.container}>
      <div className={style.containerSecond}>
        <div className={style.card}>
          <div className={style.cardContent}>
            <h1>Грузоперевозки</h1>
            <img
              className={style.avatar}
              src="https://img.icons8.com/arcade/256/container-truck.png"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardContent}>
            <h1>Грузчики</h1>
            <img
              className={style.avatar}
              src="https://img.icons8.com/color/256/movers.png"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
      <div className={style.containerThird}>
        <div className={style.card}>
          <div className={style.cardContent}>
            <h1>Сборка мебели</h1>
            <img
              className={style.avatar}
              src="https://img.icons8.com/color/256/furniture.png"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardContent}>
            <h1>Эвакуатор</h1>
            <img
              className={style.avatar}
              src="https://img.icons8.com/color/256/tow-truck.png"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Playground() {
  return (
    <div>
      <Profile />
    </div>
  );
}
