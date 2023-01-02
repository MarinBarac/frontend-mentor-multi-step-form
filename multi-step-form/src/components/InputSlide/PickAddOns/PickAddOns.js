import styles from './PickAddOns.module.scss';
import { ADD_ONS } from './constants';
import AddOn from './AddOn/AddOn';
import { useSelector } from 'react-redux';
const PickAddOns = () => {
    const addOns = useSelector(state => state.form.formData.addOns);
    
    return <div className={styles.container}>
        {ADD_ONS.map(item => <AddOn {...item} key={item.name} checked={addOns.includes(item.name)}/>)}
    </div>
}

export default PickAddOns;