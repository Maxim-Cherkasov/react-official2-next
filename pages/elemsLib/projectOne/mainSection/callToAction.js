import style from "./callToAction.module.scss";

export default function CallToAction() {
  return (
    <div className={style.actionContainer}>
      <p className={style.actionText}>140 машин</p>
      <p className={style.actionText}>Подача авто 1 час</p>
      <p className={style.actionText}>480 грузчиков</p>
      <p className={style.actionText}>Заказ от 490р</p>
      <button type="button">order</button>
    </div>
  );
}
