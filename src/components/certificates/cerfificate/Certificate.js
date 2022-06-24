import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Button from '@mui/material/Button';

const Certificate = ({ item }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className="certificates__item" data-aos="zoom-in" >
            <h3 className="certificates__heading">Курс:{item[0]}</h3>
            <p className="certificates__text">Организация:{item[1]}</p>
            <p className="certificates__text">Описание:{item[2]}</p>
            <Button variant="outlined" className="certificates__btn" href={item[3]}>Подробнее...</Button>
        </div>
    )
}

export default Certificate;