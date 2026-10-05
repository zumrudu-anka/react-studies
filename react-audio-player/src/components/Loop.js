import styles from "./Loop.module.css";

export const Loop = ({ src, onClick }) => {
  return <img className={styles.loop} src={src} onClick={onClick} />;
};
