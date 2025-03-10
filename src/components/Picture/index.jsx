const Picture = ({ picture, title }) => {
  return (
      <div>
          <img src={picture} alt={title} className="w-5/6 rounded-md borded-2" />
      </div>
  )
}
export default Picture;