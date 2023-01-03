import { useSelector } from "react-redux";
import Buttons from "../Buttons/Buttons";
import InputsSlider from "../InputsSlider/InputsSlider";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MultiStepForm.module.scss";

const MultiStepForm = () => {
  const submitted = useSelector(state => state.form.submitted);

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <InputsSlider />
        {!submitted && <Buttons />}
      </div>
    </div>
  );
};

export default MultiStepForm;
