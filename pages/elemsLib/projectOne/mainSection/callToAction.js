import style from "./callToAction.module.scss";
import Reviews from "../reviews/reviews";

export default function CallToAction() {
  return (
    <div className={style.actionContainer}>
      <Reviews />
    </div>
  );
}
