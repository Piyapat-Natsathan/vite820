const FormattedDate = ({ isHighLight, children }) => {
  return (
      <div className="text-left">
          <span className={`text-sm ${isHighLight ? "text-primaryAccent" : ""}`}>
              {children}
          </span>
      </div>
  )
}
export default FormattedDate;

