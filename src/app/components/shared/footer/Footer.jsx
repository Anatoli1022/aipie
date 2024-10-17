import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg';

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <nav className={cx('navigation')}>
          <Image src={logo} alt="" aria-hidden="true" loading="lazy" />
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
        </nav>
        <iframe
          src="https://my.spline.design/orb-8299981a83a774fdca6cd088c20d3d69/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ minHeight: '500px' }}
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
