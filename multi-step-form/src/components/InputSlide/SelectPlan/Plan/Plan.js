import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../../store/form-slice";
import styles from "./Plan.module.scss";

const Plan = ({ name, price, img, selected }) => {
  const dispatch = useDispatch();
  const monthly = useSelector((state) => state.form.formData.monthly);
  const formatedPrice = `$${monthly ? price : price * 10}${
    monthly ? "/mo" : "/yr"
  }`;

  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ""}`}
      onClick={() => {
        dispatch(formActions.setSelectedPlan({ selectedPlan: {name: name, price: price}}));
      }}
    >
      <img src={img} alt={`${name} plan icon`} className={styles.img} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{formatedPrice}</p>
        {!monthly && <p className={styles.promo}>2 months free</p>}
      </div>
    </div>
  );
};

export default Plan;
