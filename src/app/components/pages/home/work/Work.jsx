import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Work.module.scss';
import pannel from './image/pannel.png';

const cx = classNames.bind(styles);

const Work = () => {
  return (
    <section className={cx('work')}>
      <div className={cx('container', 'wrapper')}>
        <div>
          <h2 className={cx('title')}>
            Все, что вам нужно для слаженной работы
          </h2>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <Image src={pannel} alt="" aria-hidden="true" loading="lazy" />
              <div>
                <h3 className={cx('list-title')}>Работает 24/7</h3>
                <p className={cx('list-text')}>
                  Моментально отвечает на сообщения
                </p>
              </div>
            </li>{' '}
            <li className={cx('item')}>
              <Image src={pannel} alt="" aria-hidden="true" loading="lazy" />
              <div>
                <h3 className={cx('list-title')}>
                  95% клиентов не распознают ИИ
                </h3>
                <p className={cx('list-text')}>
                  Ведет естественные разговоры <br /> с клиентом
                </p>
              </div>
            </li>{' '}
            <li className={cx('item')}>
              <Image src={pannel} alt="" aria-hidden="true" loading="lazy" />
              <div>
                <h3 className={cx('list-title')}>
                  Распознает и генерирует голос
                </h3>
                <p className={cx('list-text')}>
                  Умеет слушать собеседника и отвечать ему в голосовом формате
                </p>
              </div>
            </li>{' '}
            <li className={cx('item')}>
              <Image src={pannel} alt="" aria-hidden="true" loading="lazy" />
              <div>
                <h3 className={cx('list-title')}>Знает все о продукте</h3>
                <p className={cx('list-text')}>
                  Имеет доступ к базе знаний о продуктах и услугах компании
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>3D</div>
      </div>
    </section>
  );
};

export default Work;
