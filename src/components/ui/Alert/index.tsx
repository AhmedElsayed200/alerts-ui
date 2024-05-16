import { BellRing, X } from "lucide-react";
import "./index.scss";

const Alert = () => {
  return (
    <div className="alert_container">
      <BellRing />
      <h1>Title</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque vero
        cupiditate dolor similique alias possimus sunt inventore ex tenetur
        aliquam soluta, nesciunt eligendi ipsa, quas itaque quaerat sed suscipit
        explicabo.
      </p>
      <X />
    </div>
  );
};

export default Alert;
