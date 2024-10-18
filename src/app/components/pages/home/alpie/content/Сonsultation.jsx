import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import storm from '../../../../assets/storm.svg';
import user from '../../../../assets/user.svg';
import mechanism from '../../../../assets/mechanism.svg';
import arrowButton from '../../../../assets/arrowButton.svg';

const cx = classNames.bind(styles);
const Сonsultation = () => {
  return (
    <div className={cx('content-wrapper')}>
      <div className={cx('wrapper')}>
        <span className={cx('text')}>Виджет на сайт</span>
        <h3 className={cx('title')}>Консультирует о товарах и услугах</h3>
        <p className={cx('text-product')}>
          AI-консультант, который помогает пользователям вашего сайта получить
          необходимую информацию о товарах и услугах 24/7
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={storm} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Предоставление данных</p>
          </li>
          <li className={cx('item')}>
            <Image src={user} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка жалоб</p>
          </li>
          <li className={cx('item')}>
            <Image src={mechanism} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Управление процессом</p>
          </li>
        </ul>
        <button className={cx('button')}>Установить виджет</button>
      </div>

      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>
          <div className={cx('iframe-container')}>
            <iframe
              className={cx('iframe')}
              src="https://my.spline.design/meeet-2b7cd781ad76a3d655b40fdb3b67c8d3/"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{ minHeight: '500px' }}
            ></iframe>
          </div>
          <p className={cx('text-ai')}>Чем я могу помочь?</p>
          <form action="">
            <input
              type="text"
              placeholder="Сообщение"
              className={cx('input')}
            />
            <button type="send" className={cx('button-form')}>
              <Image
                src={arrowButton}
                alt=""
                className={cx('button-image')}
                loading="lazy"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Сonsultation;
