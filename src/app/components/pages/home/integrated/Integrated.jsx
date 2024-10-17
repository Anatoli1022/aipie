import classNames from 'classnames/bind';
import styles from './Integrated.module.scss';
import Image from 'next/image';
import viber from './images/viber.png';
import mail from './images/mail.png';
import message from './images/message.png';
import sms from './images/sms.png';
import instagram from './images/Instagram.png';
import telegram from './images/telegram.png';

const cx = classNames.bind(styles);

const Integrated = () => {
  return (
    <section className={cx('integrated')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          ИИ-сотрудник легко интегрируется и обрабатывает запросы
        </h2>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <div className={cx('image-wrapper')}>
              <Image
                src={viber}
                className={cx('image')}
                alt="WhatsApp"
                loading="lazy"
              />
            </div>
            <span className={cx('text')}>WhatsApp</span>
          </li>
          <li className={cx('item')}>
            <div className={cx('image-wrapper')}>
              <Image
                src={mail}
                className={cx('image')}
                alt="viber"
                loading="lazy"
              />
            </div>
            <span className={cx('text')}>Почта</span>
          </li>{' '}
          <li className={cx('item')}>
            <div className={cx('image-wrapper')}>
              <Image
                src={message}
                className={cx('image')}
                alt="message"
                loading="lazy"
              />
            </div>
            <span className={cx('text')}>Messenger</span>
          </li>{' '}
          <li className={cx('item')}>
            <div className={cx('image-wrapper')}>
              <Image
                src={sms}
                className={cx('image')}
                alt="sms"
                loading="lazy"
              />
            </div>
            <span className={cx('text')}>SMS</span>
          </li>{' '}
          <li className={cx('item')}>
            <div className={cx('image-wrapper')}>
              <Image
                src={instagram}
                className={cx('image')}
                alt="instagram"
                loading="lazy"
              />
            </div>
            <span className={cx('text')}>Instagram*</span>
          </li>{' '}
          <li className={cx('item')}>
            <div className={cx('image-wrapper')}>
              <Image
                src={telegram}
                className={cx('image')}
                alt="Telegram"
                loading="lazy"
              />
            </div>
            <span className={cx('text')}>Telegram</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Integrated;
