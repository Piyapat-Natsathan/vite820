import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../assets/picExp1.png'
import picExp2 from '../../assets/picExp2.png'
import { useState } from "react";
import FormattedDate from "../../components/FormattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Description from "../../components/Description";
import Tech from "../../components/Tech";
import { data } from "../../contents/experience";

const SECTION_ID = "experience-section";

const Experience = () => {
    const[isMouseEnter, setIsMouseEnter] = useState(false);
    return(
        <div id={SECTION_ID}>
            <div className="text-left text-primaryAccent font-medium">Experience</div>
            {
                data.map(({
                    date,
                    title,
                    link,
                    materials,
                    descriptions,
                    skills,
                    picture
                },index)=>(
                <div
                    key={`${SECTION_ID}-${index}-${title.replaceAll("","")}`}
                    className={`grid grid-cols-[30%_70%] rounded-md px-2 py-6 transition-all ${isMouseEnter['exp1'] ? "bg-gray-300":""}`}
                    onMouseEnter={() => setIsMouseEnter({'exp1':true})}
                    onMouseLeave={() => setIsMouseEnter({'exp1':false})}
                    >
                    <div className='text-left'>
                        <FormattedDate isHighLight={isMouseEnter['exp1']}>{date}</FormattedDate>
                        <Picture picture={picture} title={title}/>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <TitleLink isHighLight={isMouseEnter['exp1']} title={title} link={link}/>

                        <div className='flex gap-4 text-xl'>
                            {
                                materials.map((e,i)=>(
                                    <Material key={`${e}-material-${i}`} icon={e.type} link="https://witchayut022.github.io/vite820/"/>
                                ))
                            }
                        </div>
                            {
                                descriptions.map((e,i)=>(
                                    <Description key={`${e}-description-${i}`} description={e}/>
                                ))
                            }
                            {
                                skills.map((e,i)=>(
                                 <Tech key={`${e}-skills-${i}`} isHighLight={isMouseEnter['exp1']} data={e}/>
                                ))
                            }
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default Experienc