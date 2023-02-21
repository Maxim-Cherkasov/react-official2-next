import Playground from "./playground";
import CallToAction from "./callToAction";
import Image from "next/image";
import style from "./mainSection.module.scss";
import background from "/public/images/mainBackground.jpg";

export default function MainSection() {
  return (
    <div className={style.mainContainer}>
      <Image
        className={style.bg}
        alt="background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />

      <h1 className={style.h1}>Наши услуги</h1>

      <secction className={style.info}>
        <Playground />
      </secction>
    </div>
  );
}
