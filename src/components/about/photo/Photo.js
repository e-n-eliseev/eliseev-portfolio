import pic from "../../../assets/ava.jpg";
import { bounceIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const Photo = () => {

    const styles = {
        bounceIn: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceIn, 'bounce')
        }
    }

    return (
        <StyleRoot>
            <div className='about__photo' style={styles.bounceIn} >
                <div className='about__photo-wrapper'>
                    <img className='about__img' src={`${pic}`} alt='My avatar' />
                </div>
            </div>
        </StyleRoot>
    )
}

export default Photo;