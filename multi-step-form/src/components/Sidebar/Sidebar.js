import { useSelector } from "react-redux";
import { STEPS } from "./constants";
import styles from "./Sidebar.module.scss";
import FormStep from "./Step/FormStep";

const Sidebar = () => {
  const currentStep = useSelector(state => state.form.currentStep);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {STEPS.map((step, index) => <FormStep {...step} index={index} key={step.id} active={index === currentStep}/>)}
      </ul>
    </div>
  );
};

export default Sidebar;
