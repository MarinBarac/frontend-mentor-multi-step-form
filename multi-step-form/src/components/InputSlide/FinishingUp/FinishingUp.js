import { useSelector } from 'react-redux';
import AddOn from './AddOn/AddOn';
import styles from './FinishingUp.module.scss';

const FinishingUp = () => {
    const formData = useSelector(state => state.form.formData);

    return <div className={styles.container}>
        <div className={styles.allPrices}>
            <div className={styles.selectedPlan}>
                <div className={styles.selectedPlanText}>
                    <h4 className={styles.selectedPlanName}>{`${formData.selectedPlan} (${formData.monthly ? 'Monthly' : 'Yearly'})`}</h4>
                    <p className={styles.changeSelectedPlan}>Change</p>
                </div>
                <p className={styles.selectedPlanPrice}>$9/mo</p>
            </div>
            {formData.addOns.map(addOn => <AddOn {...addOn} key={`Finishing up - ${addOn.name}`}/>)}
        </div>
        <div className={styles.totalPriceContainer}>
            <p className={styles.totalPriceLabel}>{`Total (${formData.monthly ? 'month' : 'per year'})`}</p>
            <p className={styles.totalPriceValue}>$12/mo</p>
        </div>
    </div>
}

export default FinishingUp;