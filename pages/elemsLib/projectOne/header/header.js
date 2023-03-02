import style from "./header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <nav className={style.nav}>
          <ul className={style.icons}>
            <li className={style.icon}>1</li>
            <li className={style.icon}>2</li>
            <li className={style.icon}>3</li>
          </ul>
          <ul className={style.phones}>
            <li className={style.phone}>
              <a href="dfg" className={style.number}>
                80000000
              </a>
            </li>
            <li className={style.phone}>
              <a href="dfg" className={style.number}>
                80000000
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
