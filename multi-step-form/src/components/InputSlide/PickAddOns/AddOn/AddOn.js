import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../../store/form-slice";
import styles from "./AddOn.module.scss";

const AddOn = ({ addOn, checked }) => {
  const dispatch = useDispatch();
  const monthly = useSelector((state) => state.form.formData.monthly);
  const formatedPrice = !monthly ? addOn.price * 10 : addOn.price;
  
  const toggleAddOn = (event) => {
    if (event.target.checked) {
      dispatch(formActions.addAddOn({ addOn: {name: addOn.name, price: monthly ? addOn.price : addOn.price * 10}}));
    } else {
      dispatch(formActions.removeAddOn({ name: addOn.name}));
    }
  }

  return (
    <div className={`${styles.container} ${checked ? styles.selected : ''}`}>
      <input type="checkbox" onChange={toggleAddOn} checked={!!checked}/>
      <div className={styles.centerText}>
        <h3 className={styles.name}>{addOn.name}</h3>
        <p className={styles.description}>{addOn.description}</p>
      </div>
      <p className={styles.price}>{`+$${formatedPrice}/${monthly ? 'mo' : 'yr'}`}</p>
    </div>
  );
};

export default AddOn;
