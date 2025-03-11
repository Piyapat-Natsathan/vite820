import fileResume from '../../assets/Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'

const Header = () => {
    return (
        <div>
            <div className='text-left flex flex-col gap-4'>
                    <div className='text-5xl text-primaryTitle font-semibold'>{data.name}</div>
                    <div className='text-2xl text-primaryAccent font-semibold'>{data.title}</div>
                    <div className='text-primaryBase text-sm w-5/6'>{data.caption}</div>
                    <div className='mt-4'>
                    <a href={data.link} target='_blank'>
                        <span className='rounded-md bg-primaryTitle text-gray-100 py-2 px-3'>
                          {data.btnText}
                          <span className='rotate-90 inline-block ml-2 text-sm'>
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                          </span>
                        </span>
                    </a>
                        
                    </div>
            </div>
        </div>
    )

}

export default Header;



