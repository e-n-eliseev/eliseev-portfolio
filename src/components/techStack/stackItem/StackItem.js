import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const StackItem = ({ item }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <figure className="stack__item" data-aos="flip-left" >
            <img className="stack__img" src={item[0]} alt="Technology avatar" />
            <figcaption>
                <p className="stack__text">{item[1]}</p>
            </figcaption>
        </figure>
    )
}

export default StackItem;