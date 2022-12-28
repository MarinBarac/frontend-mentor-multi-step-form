import { useSelector } from 'react-redux';
import stlyes from './Plan.module.scss';

const Plan = ({ name, price, img }) => {
    const monthly = useSelector((state) => state.form.formData.monthly);
    const formatedPrice = `$${monthly ? price : price*10}${monthly ? "/mo" : "/yr"}`;

    return <div className={stlyes.container}>
        <img src={img} alt={`${name} plan icon`} className={stlyes.img}/>
        <div className={stlyes.info}>
            <h3 className={stlyes.name}>{name}</h3>
            <p className={stlyes.price}>{formatedPrice}</p>
        </div>
    </div>
}

export default Plan;