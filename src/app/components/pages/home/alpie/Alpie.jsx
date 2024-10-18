import classNames from 'classnames/bind';
import styles from './Alpie.module.scss';
import Advises from './content/Advises';
import Сonsultation from './content/Сonsultation';
import Automates from './content/Automates';

const cx = classNames.bind(styles);

const Alpie = () => {
  return (
    <section className={cx('alpie')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Кем может быть Aipie?</h2>
        <div className={cx('wrapper')}>
          <Advises />
          <Сonsultation /> <Automates />
        </div>
      </div>
    </section>
  );
};

export default Alpie;
