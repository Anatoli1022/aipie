import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import arrow from './images/arrow.svg';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <nav className={cx('navigation')}>
          <div>
            <Link href="/">
              <Image
                src={logo}
                className={cx('image')}
                alt=""
                loading="lazy"
                aria-hidden="true"
              />
            </Link>
          </div>
          <ul className={cx('list')}>
            <li>
              <Link href="/" className={cx('list-link')}>
                Преимущества
              </Link>
            </li>
            <li>
              <Link href="/" className={cx('list-link')}>
                Интеграции
              </Link>
            </li>
            <li>
              <Link href="/" className={cx('list-link')}>
                Кейсы
              </Link>
            </li>
          </ul>
          <button className={cx('button')} type="button">
            <Image
              src={arrow}
              className={cx('image')}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              aria-hidden="true"
            />
            <span className={cx('button-text')}>Попробовать Aipie</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
