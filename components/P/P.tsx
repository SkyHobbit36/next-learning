import { PProps } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({size = 'small', children, className, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className,  {
                [styles.p_small]: size === 'small',
                [styles.p_medium]: size === 'medium',
                [styles.p_large]: size === 'large',
            })}
            {...props}
        >
            {children}
        </p>
    );
};