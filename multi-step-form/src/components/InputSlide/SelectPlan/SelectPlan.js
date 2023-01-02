import styles from "./SelectPlan.module.scss";
import { PLANS } from "./constants";
import Plan from "./Plan/Plan";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../store/form-slice";

const SelectPlan = () => {
  const dispatch = useDispatch();
  const monthly = useSelector((state) => state.form.formData.monthly);
  const selectedPlan = useSelector((state) => state.form.formData.selectedPlan);
    console.log(selectedPlan);
  return (
    <div className={styles.container}>
      {PLANS.map((plan) => (
        <Plan {...plan} key={plan.name} selected={selectedPlan === plan.name}/>
      ))}
      <div className={styles.toggleContainer}>
        <p className={`${styles.toggleLabel} ${monthly ? styles.active : ""}`}>
          Monthly
        </p>
        <ToggleSwitch onClick={() => dispatch(formActions.toggleMonthly())} />
        <p className={`${styles.toggleLabel} ${!monthly ? styles.active : ""}`}>
          Yearly
        </p>
      </div>
    </div>
  );
};

export default SelectPlan;
