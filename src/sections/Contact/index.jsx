import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
    <div>
        <div className='text-left flex items-end gap-5 text-lg'>
            <FontAwesomeIcon className='hover:scale-125 text-primaryAccent transition-all' icon={faGithub} />
            <FontAwesomeIcon className='hover:scale-125 text-primaryAccent transition-all' icon={faMedium} />
            <FontAwesomeIcon className='hover:scale-125 text-primaryAccent transition-all' icon={faLinkedin} />
        </div>
    </div>
    );
}

export default Contact;


