import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../../store/form-slice";
import styles from "./AddOn.module.scss";

const AddOn = ({ name, description, price, checked }) => {
  const dispatch = useDispatch();
  const monthly = useSelector((state) => state.form.formData.monthly);
  const formatedPrice = !monthly ? price * 10 : price;
  
  const toggleAddOn = (event) => {
    if (event.target.checked) {
      dispatch(formActions.addAddOn({ name: name}));
    } else {
      dispatch(formActions.removeAddOn({ name: name}));
    }
  }

  return (
    <div className={`${styles.container} ${checked ? styles.selected : ''}`}>
      <input type="checkbox" onClick={toggleAddOn} />
      <div className={styles.centerText}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <p className={styles.price}>{`+$${formatedPrice}/${monthly ? 'mo' : 'yr'}`}</p>
    </div>
  );
};

export default AddOn;
