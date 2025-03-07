import Header from "../Headers";
import Navbar from "../Navbar";
import Contacts from "../Contacts";
const Leftsection = () => {
  return (
    <div className="px-4">
      <div className="sticky top-0 grid gap-y-4 lg:grid-rows-[35%_40%_25%] lg:h-[90vh] ">
        <Header />
        <Navbar />
        <Contacts />
      </div>
    </div>
  );
};
export default Leftsection;
