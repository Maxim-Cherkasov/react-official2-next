Бэкграунд не показывается в этом контейнере, в стилях он есть
Необходимо, чтобы он был фоном этого блока

почитать официальную доку некста, новую в том числе
загуглить и быстро найти ответы
проверить на ютюбе

import Image from 'next/image'
import ViewSource from '../components/view-source'
import styles from '../styles.module.css'
import background from '/public/images/mainBackground'

const BackgroundPage = () => (
  <div>
    <div className={style.mainContainer}>
      <Image
        alt="background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export default BackgroundPage