import styles from "./TagsTemplate.module.css";

export const TagsTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
