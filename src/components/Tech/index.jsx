const Tech = ({isHighLight, data}) => {
    return (
      <div>
        <div className="flex gap-2 text-sm">
            {
              data.map((e, i) =>(
                <div key={`${e}-tech-${i}`} className={`bg-primarySubcontent px-2 py-1 rounded-md ${isHighLight ? "text-primaryTitle" : ""}`}>{e}</div>
              ))
            }
        </div>
      </div>
    )
  }
  
  export default Tech;

  // <div className="text-primaryBase font-medium bg-primaryTitle px-2 py-1 rounded-md hover:text-gray-100">React</div>
  //<div className="text-primaryBase font-medium bg-primaryTitle px-2 py-1 rounded-md hover:text-gray-100">Tailwind</div>