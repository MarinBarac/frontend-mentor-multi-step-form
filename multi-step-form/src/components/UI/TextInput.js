import styles from "./TextInput.module.scss";

const TextInput = ({ name, placeHolder, error }) => {
  return (
    <div className={styles.container}>
        <div className={styles.labelContainer}>
            <label htmlFor={name} className={styles.name}>{name}</label>
            {error && <p className={styles.error}>This field is required!</p>}
        </div>
      <input
        type="text"
        id={name}
        placeholder={placeHolder ? placeHolder : ""}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;