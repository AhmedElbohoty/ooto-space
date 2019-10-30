import React from "react";
import SVG from "react-svg";

import folder_icon from "../../../assets/folder_icon.svg";
import folder_icon_active from "../../../assets/folder_icon_active.svg";

export default function FilesDocFolder({ active, name, onClick, icon }) {
  return (
    <div
      className={`files-folder ${active && "files-folder-active"}`}
      onClick={onClick}
    >
      <div className="files-folder-details">
        <SVG
          className="files-folder-icon"
          src={icon ? icon : active ? folder_icon_active : folder_icon}
        />
        <p className="files-folder-name">{name}</p>
      </div>

      <div className="files-folder-actions">
        <span className="files-folder-action"></span>
        <span className="files-folder-action"></span>
        <span className="files-folder-action"></span>
      </div>
    </div>
  );
}
