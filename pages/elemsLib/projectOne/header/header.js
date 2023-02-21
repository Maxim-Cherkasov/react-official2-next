import style from "./header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.logo}>Грузовоз123</div>
        <nav className={style.socIcons}>
          <ul className={style.icons}>
            <li className={style.icon}>1</li>
            <li className={style.icon}>2</li>
            <li className={style.icon}>3</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
