import { bounceIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const Introdcion = () => {

    const styles = {
        bounceIn: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceIn, 'bounce')
        }
    }
    return (
        <StyleRoot>
            <div className="about__text-wrapper" style={styles.bounceIn} >
                <h1 className="about__heading" >Здравствуйте! Меня зовут Елисеев Евгений.</h1>
                <p className="about__text">Занимаюсь Frontend разработкой на протяжении двух лет.</p>
                <p className="about__text">Постоянно повышаю уровень компетенции своих навыков, а так же изучаю и применяю на практике сопутствующие технологии!</p>
            </div>
        </StyleRoot>
    )
}

export default Introdcion;