import style from "./callToAction.module.scss";

export default function CallToAction() {
  return (
    <div className={style.actionContainer}>
      <ul className={style.benefits}>
        <li className={style.item}>140 машин</li>
        <li className={style.item}>Подача авто 1 час</li>
        <li className={style.item}>Грузчики в каждом районе</li>
      </ul>
    </div>
  );
}
