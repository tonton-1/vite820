import About from "../About";
import Leftsection from "../leftsection";
import Experience from "../Experience";
const Rightsection = () => {
  return (
    <div className="grid gap-4 px-4">
      <About />

      <div className="text-left mb-96 mt-40">
        <Experience />
      </div>
      <div className="text-left mb-96">Experience</div>
      <div className="text-left mb-96">Project</div>
    </div>
  );
};
export default Rightsection;
