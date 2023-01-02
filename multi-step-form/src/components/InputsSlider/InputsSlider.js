import styles from './InputsSlider.module.scss';
import { INPUTS } from './constants';
import InputSlide from '../InputSlide/InputSlide';

const InputsSlider = () => {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <InputSlide input={INPUTS[2]}/>
        </div>
    </div>
}

export default InputsSlider;