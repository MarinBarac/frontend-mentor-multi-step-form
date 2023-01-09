import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = ({ onChange, checked }) => {
    return <div className={styles.switch}>
        <input type="checkbox" onChange={onChange} checked={checked} aria-label="toggle switch"/>
        <span className={styles.slider}/>
    </div>
}

export default ToggleSwitch;