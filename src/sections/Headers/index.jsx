import fileResume from "../../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";

const Header = () => {
  console.log("Header component is rendering..."); // ตรวจสอบการ render
  return (
    <div className="text-left flex flex-col gap-3">
      <div className="text-primary font-bold text-6xl">{data.name}</div>
      <div className="font-medium text-2xl mt-2">{data.title}</div>
      <div>{data.caption}</div>
      <div className="  px-4 py-3 mr-30 bg-primarySubcontent rounded-lg w-[35%]">
        <a href={data.link} target="_blank">
          <span className="flex items-center  ">
            {data.btnText}
            <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
