import styles from './Styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Ai = () => {
  return (
    <div className={cx('iframe-container')}>
      <iframe
        className={cx('iframe')}
        src="https://my.spline.design/meeetcopycopy-6428ca4ce0376599b246b0557dd4e371/"
        width="100%"
        height="100%"
        style={{ minHeight: '490px' }}
      ></iframe>
    </div>
  );
};

export default Ai;
