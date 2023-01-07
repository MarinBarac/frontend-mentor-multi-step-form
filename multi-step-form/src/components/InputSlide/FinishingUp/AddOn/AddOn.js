import { useSelector } from 'react-redux';
import styles from './AddOn.module.scss';

const AddOn = ({ name, price }) => {
    const monthly = useSelector(state => state.form.formData.monthly);

    return <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{`+$${price}/${monthly ? 'mo' : 'yr'}`}</p>
    </div>
}

export default AddOn;