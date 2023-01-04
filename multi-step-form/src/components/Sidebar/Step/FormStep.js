import styles from './FormStep.module.scss';

const FormStep = ({ id, title, index, active}) => {
    return <div className={`${styles.container} ${active ? styles.active : ''}`}>
        <div className={styles.numberContainer}>{index + 1}</div>
        <div className={styles.textContainer}>
            <h4 className={styles.id}>{id}</h4>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </div>
} 

export default FormStep;