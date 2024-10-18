import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import plates from '../../../../assets/plates.svg';
import bag from '../../../../assets/bag.svg';
import show from '../../../../assets/show.svg';
import investing from '../../../../assets/investing.svg';
import arrowButton from '../../../../assets/arrowButton.svg';

const cx = classNames.bind(styles);
const Automates = () => {
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
                aria-hidden="true"
                className={cx('button-image')}
              />
            </button>
          </form>
        </div>
      </div>

      <div className={cx('wrapper')}>
        <span className={cx('text')}>Консультант по покупкам</span>
        <h3 className={cx('title')}>Автоматизирует продажи</h3>{' '}
        <p className={cx('text-product')}>
          Повысьте конверсию и сделайте жизнь ваших покупателей проще. Им будет
          легче выбрать нужные товары, если с ними будет работать опытный ИИ
          продавец.
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={plates} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Рекомендации по товарам</p>
          </li>
          <li className={cx('item')}>
            <Image src={bag} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Запросы по товарам</p>
          </li>
          <li className={cx('item')}>
            <Image src={show} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Сравнение товаров</p>
          </li>{' '}
          <li className={cx('item')}>
            <Image src={investing} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Интеграция с crm</p>
          </li>
        </ul>
        <button className={cx('button')}>Подключить ассистента</button>
      </div>
    </div>
  );
};

export default Automates;
