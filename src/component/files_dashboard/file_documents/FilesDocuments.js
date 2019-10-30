import React from "react";
import FilesDocFolder from "./FilesDocFolder";

import folder_paper_icon from "../../../assets/folder_paper_icon.svg";

const folders = [
  "My files",
  "Shared with me",
  "Design resources",
  "Daily reports",
  "HAY"
];

// fd ==> files-documents
function FilesDocuments({ selected, setSelected }) {
  function renderFilesFolder() {
    return folders.map((folder, index) => {
      return (
        <FilesDocFolder
          key={index}
          name={folder}
          active={selected === index}
          onClick={() => setSelected(index)}
        />
      );
    });
  }

  return (
    <section className="files-documents">
      <div className="files-documents-head">
        <h1 className="files-documents-h1">Documents</h1>
        <button className="files-documents-add">+ Add files</button>
      </div>

      <div className="files-documents-main">
        <p className="fd-main-head">FAVOURITES</p>

        {renderFilesFolder()}

        {/* This part is hard coded because of fake data */}
        <FilesDocFolder
          name={"Amy's inspiration"}
          active={selected === 5}
          onClick={() => setSelected(5)}
          icon={folder_paper_icon}
        />
      </div>
    </section>
  );
}

export default FilesDocuments;
