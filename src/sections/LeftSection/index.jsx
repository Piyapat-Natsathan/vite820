import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";


const LeftSection = () => {
  return (
    <div>
      <div className="px-4">
        <div className='sticky top-0 grid lg:grid-rows-[35%_40%_25%] lg:h-[90vh]'>
          <Header />
          
          <Navbar />
          
          <Contact />
      </div>
    </div>
    </div>
  );
}

export default LeftSection;

