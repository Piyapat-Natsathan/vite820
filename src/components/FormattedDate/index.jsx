import { Children } from "react";

const FormattedDate = ({ date }) => {
  return (
    <div>
        <span className={`text-sm ${isMouseEnter ['exp1'] ? "text-primaryAccent" : ""}`}>{Children}</span>
    </div>

  )
}

export default FormattedDate;