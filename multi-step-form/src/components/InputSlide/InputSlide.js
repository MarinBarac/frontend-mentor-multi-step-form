import styles from './InputSlide.module.scss';

const InputSlide = ({ input }) => {
    return <div className={`${styles.container} ${styles[input.class]}`}>
        {input.icon && <img src={input.icon} alt={`${input.name} icon`} className={styles.icon}/>}
        <h1 className={styles.title}>{input.title}</h1>
        <p className={styles.description}>{input.description}</p>
        {input.jsxElement}
    </div>
}

export default InputSlide;