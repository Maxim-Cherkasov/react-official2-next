import Playground from "./playground";
import style from "./mainSection.module.scss";

export default function MainSection() {
  return (
    <div className={style.mainContainer}>
      <secction className={style.info}>
        <Playground />
      </secction>
    </div>
  );
}
