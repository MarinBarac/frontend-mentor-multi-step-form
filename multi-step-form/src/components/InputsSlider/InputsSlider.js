import styles from "./InputsSlider.module.scss";
import { INPUTS } from "./constants";
import InputSlide from "../InputSlide/InputSlide";
import { useSelector } from "react-redux";

const InputsSlider = () => {
  const currentStep = useSelector((state) => state.form.currentStep);
  const submitted = useSelector((state) => state.form.submitted);
  const index = submitted ? 4 : currentStep;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${styles[`active-${index}`]}`}>
        {INPUTS.map(input => <InputSlide input={input} key={input.id}/>)}
      </div>
    </div>
  );
};

export default InputsSlider;
