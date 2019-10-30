import React from "react";
import SVG from "react-svg";

import folder_icon from "../../../assets/folder_icon.svg";

export default function FilesCardFolder({ active, name, onClick, icon }) {
  return (
    <div className="fc-folder" onClick={onClick}>
      <div className="fc-folder-details">
        <SVG className="fc-folder-icon" src={icon ? icon : folder_icon} />
        <p className="fc-folder-name">{name}</p>
      </div>

      {active && <span className="fc-folder-indicator"></span>}
    </div>
  );
}
