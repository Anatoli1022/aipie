import styles from './Styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Ai = () => {
  return (
    <div className={cx('iframe-container')}>
      <iframe
        className={cx('iframe')}
        src="https://my.spline.design/meeet-2b7cd781ad76a3d655b40fdb3b67c8d3/"
        width="100%"
        height="100%"
        style={{ minHeight: '290px' }}
      ></iframe>
    </div>
  );
};

export default Ai;
