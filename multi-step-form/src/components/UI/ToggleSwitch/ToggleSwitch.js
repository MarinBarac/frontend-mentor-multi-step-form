import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = ({ onClick }) => {
    return <div className={styles.switch}>
        <input type="checkbox" onClick={onClick}/>
        <span className={styles.slider}/>
    </div>
}

export default ToggleSwitch;