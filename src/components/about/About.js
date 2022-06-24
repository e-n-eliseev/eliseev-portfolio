import Introducion from './introducion/Introducion';
import Photo from './photo/Photo';
import Waves from "../waves/Waves";

const About = () => {

    return (
        <section className='about'>
            <Photo />
            <Introducion />
            <Waves />
        </section >
    )
}

export default About;