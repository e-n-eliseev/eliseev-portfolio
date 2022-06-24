import uniqid from "uniqid";
import Waves from "../waves/Waves";
import Project from "./project/Project";
import { projects } from "../../projects";

const PetProjects = () => {
    return (
        <section className="projects">
            <div className="projects__body">
                <h2 className="projects__heading">
                    Пет проекты.
                </h2>
                <p className="projects__text projects__text--description" >В данной секции представлены некоторые из моих проектов, для того чтобы подробно ознакомиться с ними и посетить сайт, пожалуйста, нажмите кнопку "подробнее" на карточке элемента.</p>
                <div className="projects__wrapper">
                    {projects.map(item => <Project key={uniqid()} item={item} />)}
                </div>
                <Waves />
            </div>
        </section>
    )
}

export default PetProjects;