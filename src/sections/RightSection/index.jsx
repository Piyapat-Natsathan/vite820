import About from "../About";
import Experience from "../Experience";

const RightSection = () => {
    return (
        <div className="grid gap-40 px-4">
            
            < About />
            
            <div className="text-left mb-96">< Experience /> </div>
            <div className="text-left mb-96">Project</div>
        </div>
       
    );
}

export default RightSection;

