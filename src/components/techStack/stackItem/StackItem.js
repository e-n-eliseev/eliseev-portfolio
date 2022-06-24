import { flipInX } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const StackItem = ({ item }) => {
    const styles = {
        flipInX: {
            animation: 'x 1s',
            animationName: Radium.keyframes(flipInX, 'flip')
        }
    }
    return (
        < StyleRoot>
            <figure className="stack__item" style={styles.flipInX}>
                <img className="stack__img" src={item[0]} alt="Technology avatar" />
                <figcaption>
                    <p className="stack__text">{item[1]}</p>
                </figcaption>
            </figure>
        </StyleRoot>
    )
}

export default StackItem;