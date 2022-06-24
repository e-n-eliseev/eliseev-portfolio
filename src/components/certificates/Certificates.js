import Waves from "../waves/Waves";
import uniqid from "uniqid";
import { certificate } from "../../certificate";
import Certificate from "./cerfificate/Certificate";

const Certificates = () => {
    return (
        <section className="certificates">
            <div className="certificates__body">
                <h2 className="certificates__heading">
                    Сертификаты.
                </h2>
                <p className="certificates__text certificates__text--description" >Для того, чтобы перейти на страницу сертификата, пожалуйста, нажмите на кнопку "подробнее" на карточке.</p>
                <div className="certificates__wrapper">
                    {certificate.map(item => <Certificate key={uniqid()} item={item} />)}
                </div>
                <Waves />
            </div>
        </section>

    )
}

export default Certificates;