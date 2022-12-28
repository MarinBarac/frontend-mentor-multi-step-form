import InputsSlider from "../InputsSlider/InputsSlider";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MultiStepForm.module.scss";

const MultiStepForm = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <InputsSlider />
    </div>
  );
};

export default MultiStepForm;
