import styles from './author.module.css';

const Author = ({ avathar, name, createdDate }) => {
  return (
    <div className={styles['post--author']}>
      <img className={styles.img} src={avathar} alt="Velu S Gautam" />
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>
          {new Date(createdDate)
            .toJSON()
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-')}
        </div>
      </div>
    </div>
  );
};

export default Author;
