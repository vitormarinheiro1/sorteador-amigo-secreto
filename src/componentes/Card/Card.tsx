import styles from './Card.module.scss';

interface Props {
    children: string
}

export const Card = ({ children }: Props) => {
    return(
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Card;