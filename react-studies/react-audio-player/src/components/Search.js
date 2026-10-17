import styles from "./Search.module.css";

export const Search = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      className={styles.search}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
