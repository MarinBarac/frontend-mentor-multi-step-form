import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/form-slice";
import styles from "./TextInput.module.scss";

const TextInput = ({ name, field, placeHolder, action }) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.form.formData[field]);
  const showError = useSelector(state => state.form.showError);

  const handleChange = (event) => {
    dispatch(action({ [field]: event.target.value }));
  }

  console.log(showError);

  const handleBlur = () => {
    if(!showError) dispatch(formActions.setShowError({ showError: true }));
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