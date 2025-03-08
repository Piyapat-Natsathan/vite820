import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHightLight, title, link}) => {
    return (
        <div className={`text-left text-primaryAccent ${isMouseEnter ['exp1']? "text-primaryTitle" : ""}`}>
            <a href={link} target="_blank">
            {title}
            <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 ease-out ${isMouseEnter['exp1'] ? "translate-x-1 -translate-y-1":""}`} icon={faArrowRight}/>
            </a>
            
             </div>
    )
}

export default TitleLink;