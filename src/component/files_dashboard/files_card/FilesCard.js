import React from "react";
import SVG from "react-svg";

function FilesCard({ selectedFile, setSelectedFile, icon, name, index }) {
  return (
    <div
      className={`fc-main-file ${selectedFile && "fc-main-file-active"}`}
      onClick={() => setSelectedFile(index)}
    >
      <SVG src={icon} />
      <p className="fc-file-name">{name}</p>
    </div>
  );
}

export default FilesCard;
