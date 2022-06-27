import pic from "../../../assets/ava.jpg";
import { bounceInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const Photo = () => {

    const styles = {
        bounceInLeft: {
            animation: 'x 3s',
            animationName: Radium.keyframes(bounceInLeft, 'bounce')
        }
    }
    return (
        <StyleRoot>
            <div className='about__photo' style={styles.bounceInLeft} >
                <div className='about__photo-wrapper'>
                    <img className='about__img' src={`${pic}`} alt='My avatar' />
                </div>
            </div>
        </StyleRoot>
    )
}

export default Photo;