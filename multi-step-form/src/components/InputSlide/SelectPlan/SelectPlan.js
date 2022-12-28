import styles from './SelectPlan.module.scss';
import { PLANS } from './constants';
import Plan from './Plan/Plan';
import ToggleSwitch from '../../UI/ToggleSwitch/ToggleSwitch';
import { useSelector } from 'react-redux';

const SelectPlan = () => {
    const monthly = useSelector((state) => state.form.formData.monthly);
    
    return <div className={styles.container}>
        {PLANS.map(plan => <Plan {...plan} key={plan.name}/>)}
        <div className={styles.toggleContainer}>
            <p className={`${styles.toggleLabel} ${monthly ? styles.active : ''}`}>Monthly</p>
            <ToggleSwitch />
            <p className={`${styles.toggleLabel} ${!monthly ? styles.active : ''}`}>Yearly</p>
        </div>
    </div>
}

export default SelectPlan;