import styles from './FormStep.module.scss';

const FormStep = ({ id, title, index}) => {
    return <div className={styles.container}>
        <div className={styles.numberContainer}>{index}</div>
        <div className={styles.textContainer}>
            <h4>{id}</h4>
            <h3>{title}</h3>
        </div>
    </div>
} 

export default FormStep;