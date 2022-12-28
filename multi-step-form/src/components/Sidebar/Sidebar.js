import { STEPS } from "./constants";
import styles from "./Sidebar.module.scss";
import FormStep from "./Step/FormStep";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {STEPS.map((step, index) => <FormStep {...step} index={index} key={step.id}/>)}
      </ul>
    </div>
  );
};

export default Sidebar;
