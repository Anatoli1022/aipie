import classNames from 'classnames/bind';
import styles from './Sales.module.scss';
import Image from 'next/image';
import image from './images/image.webp';
import image2 from './images/image_2.webp';
import image3 from './images/image_3.webp';
import background from './images/background.webp';
import backgroundSecond from './images/background-second.svg';
import backgroundThird from '../../../assets/background-third.svg';
const cx = classNames.bind(styles);

const Sales = () => {
  return (
    <section className={cx('sales')}>
      <div className={cx('container', 'sale-container')}>
        <h2 className={cx('title')}>
          Поможем увеличить продажи и учшить связь с клиентами
        </h2>
        <div className={cx('wrapper-content')}>
          <div className={cx('block')}>
            <h4 className={cx('title-block')}>Первая линия поддержки</h4>
            <p className={cx('text')}>
              Наш ИИ-помощник понимает вопросы клиентов, решает проблемы и
              передает сложные вопросы в службу поддержки
            </p>
            <Image
              src={image}
              className={cx('image')}
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className={cx('block')}>
            <h4 className={cx('title-block')}>Работа по базе знаний </h4>
            <p className={cx('text')}>
              ИИ имеет доступ к предварительно созданной базе знаний о продуктах
              и услугах компании
            </p>
          </div>
          <div className={cx('block')}>
            <h4 className={cx('title-block')}>Омниканальность</h4>
            <p className={cx('text')}>
              Встречайте своих клиентов там, где они находятся и обеспечивайте
              последовательную и удобную поддержку
            </p>{' '}
            <Image
              src={image3}
              className={cx('image')}
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className={cx('block')}>
            <h4 className={cx('title-block')}>Умный перевод на менеджера</h4>
            <p className={cx('text')}>
              Наш ИИ-сотрудник передает сложные случаи вашей команде с важными
              данными, чотбы быстро решить проблему
            </p>
          </div>
          <div className={cx('block')}>
            <h4 className={cx('title-block')}>Человеческий язык </h4>
            <p className={cx('text')}>
              ИИ-сотрудник умеет вести естественные разговоры, которые
              соответствуют индивидуальности вашего бренда
            </p>

            <Image
              src={image2}
              className={cx('image')}
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className={cx('block')}>
            <h4 className={cx('title-block')}>Анализ каталога товаров</h4>
            <p className={cx('text')}>
              ИИ анализирует запросы клиентов, выбирает подходящий товар из
              каталога и предлагает оптимальные решения
            </p>
          </div>
        </div>
        <Image
          src={background}
          className={cx('background')}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <Image
          src={backgroundSecond}
          className={cx('background-second')}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <Image
          src={backgroundThird}
          className={cx('background-third')}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Sales;
