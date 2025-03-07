import { data } from "../../contents/about";
const About = () => {
  return (
    <div>
      <div className="text-primaryContent font-medium text-left">
        {data.title}
      </div>
      <div className="text-left">{data.description}</div>
    </div>
  );
};
export default About;
