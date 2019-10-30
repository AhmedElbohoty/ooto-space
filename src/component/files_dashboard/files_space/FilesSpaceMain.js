import React from "react";
import SVG from "react-svg";

import racket_icon from "../../../assets/racket_icon.svg";

// fs ==> files space
function FilesSpaceMain() {
  return (
    <div className="fs-main">
      <SVG src={racket_icon} />

      <div className="fs-main-details">
        <p className="fs-main-title">ooto Space</p>

        <div>
          <div className="fs-main-progress">
            <span className="fs-main-space-active"></span>
          </div>
          <p className="fs-main-space">8.08GB/40,53GB</p>
        </div>
      </div>
    </div>
  );
}

export default FilesSpaceMain;
