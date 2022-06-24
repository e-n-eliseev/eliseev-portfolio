import About from "./components/about/About";
import Header from "./components/header/Header";
import "./styles/app.scss";
import { lazy } from "react";
const TechStack = lazy(() => import("./components/techStack/TechStack"));
const PetProjects = lazy(() => import("./components/petProjects/PetProjects"));
const Certificates = lazy(() => import("./components/certificates/Certificates"));
const Contacts = lazy(() => import("./components/contacts/Contacts"));

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <TechStack />
      <PetProjects />
      <Certificates />
      <Contacts />
    </div>
  );
}

export default App;
