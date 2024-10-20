import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Hero.module.scss';
import border from './images/border.webp';
import arrow from '../../../assets/arrow.svg';
const cx = classNames.bind(styles);

const Hero = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <div className={cx('wrapper-content')}>
          <h1 className={cx('title')}>Aipie</h1>
          <p className={cx('text')}>
            AI сотрудник – ваше конкурентное преимущество, всегда на связи 24/7
          </p>

          <div className={cx('wrapper')}>
            <span className={cx('ai-text')}>ИИ, который консультирует</span>{' '}
            <Image
              src={border}
              className={cx('image')}
              alt=""
              aria-hidden="true"
              loading="eager"
            />
          </div>

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
        </div>

        <iframe
          className={cx('iframe')}
          src="https://my.spline.design/-f4ec32c28f52a6868167ac78ea55bb63/"
          width="100%"
          height="100%"
          style={{ minHeight: '1000px' }}
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
