import About from "./components/about/About";
import Header from "./components/header/Header";
import "./styles/app.scss";
import { lazy } from "react";
const TechStack = lazy(() => import("./components/techStack/TechStack"));

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
