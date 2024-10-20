import classNames from 'classnames/bind';
import styles from './Integrated.module.scss';
import Image from 'next/image';
import { data } from './data';

const cx = classNames.bind(styles);

const Integrated = () => {
  return (
    <section className={cx('integrated')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          ИИ-сотрудник легко интегрируется и обрабатывает запросы
        </h2>
        <div className={cx('list-wrapper')}>
          <ul className={cx('list', 'carousel-track')}>
            {data.map((item, index) => (
              <li key={index} className={cx('item')}>
                <div className={cx('image-wrapper')}>
                  <Image
                    src={item.image}
                    className={cx('image')}
                    alt={item.text}
                    loading="lazy"
                  />
                </div>
                <span className={cx('text')}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Integrated;

// <li className={cx('item')}>
// <div className={cx('image-wrapper')}>
//   <Image
//     src={mail}
//     className={cx('image')}
//     alt="viber"
//     loading="lazy"
//   />
// </div>
// <span className={cx('text')}>Почта</span>
// </li>
// <li className={cx('item')}>
// <div className={cx('image-wrapper')}>
//   <Image
//     src={avito}
//     className={cx('image')}
//     alt="Avito"
//     loading="lazy"
//   />
// </div>
// <span className={cx('text')}>Avito</span>
// </li>
// <li className={cx('item')}>
// <div className={cx('image-wrapper')}>
//   <Image
//     src={message}
//     className={cx('image')}
//     alt="message"
//     loading="lazy"
//   />
// </div>
// <span className={cx('text')}>Messenger</span>
// </li>{' '}
// <li className={cx('item')}>
// <div className={cx('image-wrapper')}>
//   <Image
//     src={sms}
//     className={cx('image')}
//     alt="sms"
//     loading="lazy"
//   />
// </div>
// <span className={cx('text')}>SMS</span>
// </li>{' '}
// <li className={cx('item')}>
// <div className={cx('image-wrapper')}>
//   <Image
//     src={instagram}
//     className={cx('image')}
//     alt="instagram"
//     loading="lazy"
//   />
// </div>
// <span className={cx('text')}>Instagram*</span>
// </li>{' '}
// <li className={cx('item')}>
// <div className={cx('image-wrapper')}>
//   <Image
//     src={telegram}
//     className={cx('image')}
//     alt="Telegram"
//     loading="lazy"
//   />
// </div>
// <span className={cx('text')}>Telegram</span>
// </li>
