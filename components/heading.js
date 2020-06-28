import styles from './header.module.css';

const Heading = ({ data: { text, level } }) => {
  if (level === 1) {
    return <h1>{text}</h1>;
  }
  if (level === 2) {
    return <h2>{text}</h2>;
  }
  if (level === 3) {
    return <h3 className={styles['sub-heading']}>{text}</h3>;
  }
  if (level === 4) {
    return <h4>{text}</h4>;
  }
  return null;
};

export default Heading;
