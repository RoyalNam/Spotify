import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ title, href, to, className, dark, text, outline, large, icon, onClick }) {
    let Comp = 'button';
    const Props = [onClick];
    if (href) {
        Comp = 'a';
        Props.href = href;
    }
    if (to) {
        Comp = 'Link';
        Props.to = to;
    }
    const cls = cx('btn', { [className]: className, dark, text, outline, large });
    return (
        <Comp className={cls} {...Props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{title}</span>
        </Comp>
    );
}

export default Button;
