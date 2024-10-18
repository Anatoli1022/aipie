import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import manyStars from '../../../../assets/manyStars.svg';
import star from '../../../../assets/star.svg';
import lightning from '../../../../assets/lightning.svg';
import arrowButton from '../../../../assets/arrowButton.svg';

const cx = classNames.bind(styles);
const Advises = () => {
  return (
    <div className={cx('content-wrapper')}>
      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>{' '}
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
                loading="lazy"
                aria-hidden="true"    className={cx('button-image')}
              />
            </button>
          </form>
        </div>
      </div>

      <div className={cx('wrapper')}>
        <span className={cx('text')}>Техподдержка клиентов</span>
        <h3 className={cx('title')}>
          Автоматическая обработка 90% заявок
        </h3>{' '}
        <p className={cx('text-product')}>
          AI-ассистент может довести клиента до завершения сделки, даже если
          клиент перестал отвечать
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={manyStars} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Отслеживание заказов</p>
          </li>
          <li className={cx('item')}>
            <Image src={star} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка жалоб</p>
          </li>
          <li className={cx('item')}>
            <Image src={lightning} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка возвратов</p>
          </li>
        </ul>
        <button className={cx('button')}>Подключить ассистента</button>
      </div>
    </div>
  );
};

export default Advises;
