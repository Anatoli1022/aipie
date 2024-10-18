import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import menu from './images/menu.svg';

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
                className={cx('logo')}
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
              alt=""
              width={40}
              height={40}
              loading="eager"
              aria-hidden="true"
            />
            <span className={cx('button-text')}>Попробовать Aipie</span>
          </button>
          <button className={cx('menu')}>
            <Image
              src={menu}
              alt=""
              width={42}
              height={34}
              loading="eager"
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
