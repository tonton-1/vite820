import Header from "../Headers";
import Navbar from "../Navbar";
import Contacts from "../Contacts";
const Leftsection = () => {
  return (
    <div>
      <div className="sticky top-0 grid grid-rows-[35%_40%_25%] h-[90vh] ">
        <Header />
        <Navbar />
        <Contacts />
      </div>
    </div>
  );
};
export default Leftsection;
