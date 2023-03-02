import style from "./playground.module.scss";

function Profile() {
  return (
    <div className={style.playContainer}>
      <div className={style.containerSecond}>
        <a href="#">
          <div className={style.card}>
            <div className={style.cardContent}>
              <h2>Грузоперевозки</h2>
              <img
                className={style.avatar}
                src="https://img.icons8.com/arcade/256/container-truck.png"
                alt="Aklilu Lemma"
                width={70}
                height={70}
              />
            </div>
          </div>
        </a>
        <div className={style.card}>
          <div className={style.cardContent}>
            <h2>Грузчики</h2>
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
            <h2>Сборка мебели</h2>
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
            <h2>Эвакуатор</h2>
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
