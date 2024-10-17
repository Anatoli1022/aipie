import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Hero.module.scss';
import border from './images/border.png';

const cx = classNames.bind(styles);

const Hero = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
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
      </div>
    </section>
  );
};

export default Hero;
