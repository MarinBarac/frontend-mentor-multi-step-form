import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TextInput.module.scss";

const TextInput = ({ id, name, field, placeHolder, action }) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.form.formData[field]);
  const showError = useSelector(state => state.form.showError);
  const [localShowError, setLocalShowError] = useState(false);

  const handleChange = (event) => {
    dispatch(action({ [field]: event.target.value }));
  }

  const handleBlur = () => {
    if(!localShowError) setLocalShowError(true);
  }

  return (
    <div className={`${styles.container} ${(showError || localShowError) && value.length < 1 ? styles.error : ''}`}>
        <div className={styles.labelContainer}>
            <label htmlFor={id} className={styles.name}>{name}</label>
            <p className={styles.error}>This field is required!</p>
        </div>
      <input
        type="text"
        id={id}
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