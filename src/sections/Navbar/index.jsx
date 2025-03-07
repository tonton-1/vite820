import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="text-left mt-10 text-lg space-y-4">
      <div>
        <FontAwesomeIcon
          className="mr-3 hover:scale-125 hover:text-primary transition-all"
          icon={faArrowRight}
        />
        About
      </div>
      <div>Experience</div>
      <div>Project</div>
      <div>Article </div>
    </div>
  );
};

export default Navbar;
