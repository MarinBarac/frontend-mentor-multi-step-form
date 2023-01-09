import styles from './PersonalInfo.module.scss';
import { INPUTS } from './constants';
import TextInput from '../../UI/TextInput';

const PersonalInfo = () => {

    return <div className={styles.container}>
        {INPUTS.map(input => <TextInput {...input} id={input.name.toLowerCase().split(" ").join("-")} key={input.name}/>)}
    </div>
}

export default PersonalInfo;