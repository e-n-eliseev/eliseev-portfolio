import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ModalWindow from "./modal/ModalWindow";

const Project = ({ item }) => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    return (
        <figure className="projects__item" data-aos="fade" >
            <img className="projects__img" src={item[1]} alt="Project avatar" />
            <figcaption className="projects__description" >
                <h3 className="projects__heading">{item[0]}</h3>
                <p className="projects__text">{item[5]}</p>
                <ModalWindow item={item} />
            </figcaption>
        </figure>
    )
}

export default Project;