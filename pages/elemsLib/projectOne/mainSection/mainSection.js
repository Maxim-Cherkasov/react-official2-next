import Playground from "./playground";
import Reviews from "../reviews/reviews";
import Image from "next/image";
import style from "./mainSection.module.scss";
import background from "/public/images/mainBackground.jpg";

export default function MainSection() {
  return (
    <div className={style.mainContainer}>
      <secction className={style.info}>
        <Playground />
        <Reviews />
      </secction>
    </div>
  );
}
