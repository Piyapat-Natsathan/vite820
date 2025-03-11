import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div>
            <div className='text-left flex flex-col gap-4 font-semibold'>
                      <div>
                      <FontAwesomeIcon className='mr-2 text-primaryTitle mt-10' icon={faArrowRight} />
                        About
                      </div>
                      <div>Experience</div>
                      <div>Projects</div>
                      <div>Article</div>
                    </div>
        </div>
    )
}

export default Navbar;


