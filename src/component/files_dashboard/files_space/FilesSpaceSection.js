import React, { useState } from "react";

function FilesSpaceSection({ title, Component }) {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="fs-section">
      <div className="fs-section-head" onClick={() => setIsShow(!isShow)}>
        <p>{title}</p>
        <p
          className={`fs-section-arrow  ${isShow && "fs-section-arrow-active"}`}
        ></p>
      </div>

      {isShow && Component && <Component />}
    </div>
  );
}

export default FilesSpaceSection;
