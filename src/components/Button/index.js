import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick }) {
  let Comp = 'button';
  const classes = cx('wrapper');
  return (
    <Comp className={classes}>
      {/* Thêm span để sau này thêm icon sẽ dễ xử lý hơn */}
      <span>{children}</span>
    </Comp>
  );
}
export default Button;
