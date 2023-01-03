import styles from "./Buttons.module.scss";
import { useSelector } from "react-redux";

const Buttons = () => {
  const currentStep = useSelector((state) => state.form.currentStep);

  return (
    <div className={styles.container}>
      {currentStep > 0 && <p className={styles.backBtn}>Go Back</p>}
      {currentStep < 3 && <button className={styles.nextBtn}>Next Step</button>}
      {currentStep === 3 && (
        <button className={styles.confirmBtn}>Confirm</button>
      )}
    </div>
  );
};

export default Buttons;
