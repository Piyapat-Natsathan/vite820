import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({icon, link}) => {
  return (
    <div className="hover:scale-150 transition-all">
        <a href={link} className="hover:scale-150 hover:text-primaryContent transition-all"><FontAwesomeIcon icon={icon} /> </a>
    </div>
  );
}
export default Material;

