import styles from "./Buttons.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/form-slice";

const Buttons = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep);

  return (
    <div className={styles.container}>
      {currentStep > 0 && (
        <p
          className={styles.backBtn}
          onClick={() => dispatch(formActions.decreaseStep())}
        >
          Go Back
        </p>
      )}
      {currentStep < 3 && (
        <button
          className={`${styles.next} ${styles.btn}`}
          onClick={() => {
            dispatch(formActions.increaseStep());
          }}
        >
          Next Step
        </button>
      )}
      {currentStep === 3 && (
        <button
          className={`${styles.confirm} ${styles.btn}`}
          onClick={() => dispatch(formActions.submitForm())}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Buttons;
