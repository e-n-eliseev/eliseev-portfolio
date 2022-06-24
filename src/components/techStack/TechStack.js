import { techStack } from "../../techStack";
import StackItem from "./stackItem/StackItem";
import uniqid from "uniqid";
import Waves from "../waves/Waves";

const TechStack = () => {
    return (
        <section className="stack">
            <div className="stack__body">
                <h2 className="stack__heading">
                    Мой стек технологий.
                </h2>
                <p className="stack__text stack__text--description" >Ниже представлены технологии , которые я изучал и применял на практике.</p>
                <div className="stack__wrapper">
                    {techStack.map(item => <StackItem key={uniqid()} item={item} />)}
                </div>
                <Waves />
            </div>
        </section>
    )
}

export default TechStack;