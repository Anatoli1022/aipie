'use client';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import menu from './images/menu.svg';

const cx = classNames.bind(styles);

const NAV_LINKS = [
  { href: '#advantages', label: 'Преимущества' },
  { href: '#integrations', label: 'Интеграции' },
  { href: '#cases', label: 'Кейсы' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <nav className={cx('navigation')}>
          <div>
            <Link href="/" onClick={close}>
              <Image
                src={logo}
                className={cx('logo')}
                alt="Aipie"
                loading="eager"
              />
            </Link>
          </div>
          <ul className={cx('list')}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={cx('list-link')}>
                  {link.label}
                </Link>
              </li>
            ))}
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
          <button
            className={cx('menu')}
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
          >
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
      <div
        className={cx('mobile-menu', { 'mobile-menu--open': isOpen })}
        aria-hidden={!isOpen}
      >
        <ul className={cx('mobile-list')}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cx('mobile-link')}
                onClick={close}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={cx('mobile-cta')}
              onClick={close}
            >
              Попробовать Aipie
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
