import React from "react";
import { IAlertProps } from "../../../interfaces/alert";
import "./index.scss";

const Alert: React.FC<IAlertProps> = (props) => {
  const { title, description, Icon, color } = props;

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="heading">
        {/* Render the icon component */}
        {<Icon size={12} />}
        <p>{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Alert;
