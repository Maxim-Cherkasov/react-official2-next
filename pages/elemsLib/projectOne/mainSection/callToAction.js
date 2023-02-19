import style from "./callToAction.module.scss";

export default function CallToAction() {
  return (
    <div className={style.actionContainer}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button type="button">order</button>
    </div>
  );
}
