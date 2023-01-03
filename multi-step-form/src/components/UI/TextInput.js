import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TextInput.module.scss";

const TextInput = ({ name, field, placeHolder, action }) => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const value = useSelector(state => state.form.formData[field]);

  const handleChange = (event) => {
    dispatch(action({ [field]: event.target.value }));
  }

  const handleBlur = () => {
    if(!showError) setShowError(true);
  }

  return (
    <div className={`${styles.container} ${showError && value.length < 1 ? styles.error : ''}`}>
        <div className={styles.labelContainer}>
            <label htmlFor={name} className={styles.name}>{name}</label>
            <p className={styles.error}>This field is required!</p>
        </div>
      <input
        type="text"
        id={name}
        placeholder={placeHolder ? placeHolder : ""}
        className={styles.input}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};

export default TextInput;