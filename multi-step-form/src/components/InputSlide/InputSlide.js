import styles from './InputSlide.module.scss';

const InputSlide = ({ input }) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>{input.title}</h1>
        <p className={styles.description}>{input.description}</p>
        {input.jsxElement}
    </div>
}

export default InputSlide;