import uniqid from "uniqid";
import Waves from "../waves/Waves";
import Project from "./project/Project";
import { projects } from "../../projects";

const PetProjects = () => {
    return (
        <section className="projects">
            <div className="projects__body">
                <h2 className="projects__heading">
                    Мои пет проекты.
                </h2>
                <p className="projects__text projects__text--description" >Ниже представлены некоторые из моих пет проектов, для того чтобы подробно ознакомиться с ними и посетить сайт, нажмите кнопку подробнее на карточке проекта.</p>
                <div className="projects__wrapper">
                    {projects.map(item => <Project key={uniqid()} item={item} />)}
                </div>
                <Waves />
            </div>
        </section>
    )
}

export default PetProjects;