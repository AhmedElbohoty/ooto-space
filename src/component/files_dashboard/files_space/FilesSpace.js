import React from "react";
import FilesSpaceMain from "./FilesSpaceMain";
import FilesSpaceSection from "./FilesSpaceSection";
import FilesSpaceSettings from "./FilesSpaceSettings";
import FilesSpaceRecent from "./FilesSpaceRecent";

// fs ==> files space
function FilesSpace() {
  return (
    <section className="files-space">
      <FilesSpaceMain />

      <FilesSpaceSection title="FILE DETAILS" />

      <FilesSpaceSection title="SETTINGS" Component={FilesSpaceSettings} />

      <FilesSpaceSection title="RECENT FILES" Component={FilesSpaceRecent} />
    </section>
  );
}

export default FilesSpace;
