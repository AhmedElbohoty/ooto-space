import React from "react";
import SVG from "react-svg";

import folder_icon from "../../../assets/folder_icon.svg";

function FilesSpaceRecent() {
  return (
    <div className="fs-recent">
      <div className="fs-recent-section">
        <p className="fs-recent-head">
          <span className="fs-recent-head-indicator"></span>
          <span> Amy Dettmering shared 3 files</span>
        </p>
        <p className="fs-recent-time">A moment ago</p>

        <div className="fs-recent-file">
          <span className="fs-pptx">PPTX</span>
          <p>Content_Client_Presentation.pptx</p>
        </div>

        <div className="fs-recent-file">
          <span className="fs-pdf">PDF</span>
          <p>Hikoot_Proposal.pdf</p>
        </div>

        <div className="fs-recent-file">
          <span className="fs-pptx">PPTX</span>
          <p>Client_Sketches.pptx</p>
        </div>
      </div>

      <div className="fs-recent-section">
        <p className="fs-recent-head">
          <span className="fs-recent-head-indicator"></span>
          <span>Samuel Spencer shared a folder with you</span>
        </p>
        <p className="fs-recent-time">1 hour ago</p>

        <div className="fs-recent-folder">
          <SVG className="fs-recent-folder-icon" src={folder_icon} />
          <p>Inspiration</p>
        </div>
      </div>
    </div>
  );
}

export default FilesSpaceRecent;
