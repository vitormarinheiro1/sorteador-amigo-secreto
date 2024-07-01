import styles from './Card.module.scss';

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
