import About from "../About";

const RightSection = () => {
    return (
        <div className="grid gap-4 px-4">
            <div>
            < About />
            <div className='text-left mb-96'>About</div>
            <div className='text-left mb-96'>Experience</div>
            <div className='text-left mb-96'>Projects</div>
        </div>
        </div>
    );
}

export default RightSection;