import Buttons from "../Buttons/Buttons";
import InputsSlider from "../InputsSlider/InputsSlider";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MultiStepForm.module.scss";

const MultiStepForm = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <InputsSlider />
        <Buttons />
      </div>
    </div>
  );
};

export default MultiStepForm;
