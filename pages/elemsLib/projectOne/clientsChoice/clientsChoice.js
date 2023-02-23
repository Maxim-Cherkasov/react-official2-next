import style from "./clientsChoice.module.scss";

export default function ClientsChoice() {
  return (
    <div className={style.clientsChoiceContainer}>
      <h2 className={style.h2}>Почему клиенты выбирают нас</h2>
      <div className={style.playContainer}>
        <div className={style.containerSecond}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img
                className={style.avatar}
                src="https://img.icons8.com/arcade/256/container-truck.png"
                alt="Aklilu Lemma"
                width={70}
                height={70}
              />
              <h2>Экономия времени</h2>
              <p className={style.explanation}>
                Не надо звонить и вести долгие переговоры
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img
                className={style.avatar}
                src="https://img.icons8.com/color/256/movers.png"
                alt="Aklilu Lemma"
                width={70}
                height={70}
              />
              <h2>Гарантия цены</h2>
              <p className={style.explanation}>
                Исполнитель не изменит цену и условия в последний момент
              </p>
            </div>
          </div>
        </div>
        <div className={style.containerThird}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img
                className={style.avatar}
                src="https://img.icons8.com/color/256/furniture.png"
                alt="Aklilu Lemma"
                width={70}
                height={70}
              />
              <h2>Гарантия цены</h2>
              <p className={style.explanation}>
                Исполнитель не изменит цену и условия в последний момент
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img
                className={style.avatar}
                src="https://img.icons8.com/color/256/tow-truck.png"
                alt="Aklilu Lemma"
                width={70}
                height={70}
              />
              <h2>Гарантия цены</h2>
              <p className={style.explanation}>
                Исполнитель не изменит цену и условия в последний момент
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
