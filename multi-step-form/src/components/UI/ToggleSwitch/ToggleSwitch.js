import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = () => {
    return <div className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}/>
        <input type="checkbox" />
    </div>
}

export default ToggleSwitch;