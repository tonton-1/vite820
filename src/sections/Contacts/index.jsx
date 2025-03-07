import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // นำเข้าไอคอน
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"; // นำเข้าไอคอนจาก brands
const Contact = () => {
  return (
    <div className=" text-left flex items-end  gap-4 text-2xl">
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primary transition-all"
        icon={faGithub}
      />
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primary transition-all"
        icon={faMedium}
      />
      <FontAwesomeIcon
        className=" hover:scale-125 hover:text-primary transition-all"
        icon={faLinkedin}
      />
    </div>
  );
};
export default Contact;
