import Playground from "./playground";
import Image from "next/image";
import style from "./mainSection.module.scss";
import background from "/public/images/mainBackground.jpg";

export default function MainSection() {
  return (
    <div className={style.mainContainer}>
      <Image
        alt="background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />
      <secction className={style.info}>
        <Playground />
      </secction>
    </div>
  );
}
