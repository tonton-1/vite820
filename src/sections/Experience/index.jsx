import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Experience = () => {
  return (
    <div className="space-y-4">
      <div className="text-left font-medium">Experience</div>
      <div className="grid grid-cols-[30%_70%]">
        <div>
          <div>2024-2025</div>
          <div>Image</div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-medium">Fashion Ecommerce</div>
          <div>
            {" "}
            <div className="flex gap-4 text-lg ">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faMedium} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            asperiores corporis itaque modi consequatur quidem culpa, voluptas
            voluptatibus ducimus ad quam eligendi quod animi vitae beatae
            sapiente veniam ipsum officiis et esse dicta, laudantium eius
            veritatis. Omnis quidem ut quis vel veritatis, esse dolor,
            laboriosam amet quisquam at adipisci quae.
          </div>
          <div className="text-left">Skill</div>
          <div className="text-left flex gap-4 ">
            <div className="bg-primarySubcontent px-2 py-1 rounded-lg ">
              React
            </div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-lg">
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
