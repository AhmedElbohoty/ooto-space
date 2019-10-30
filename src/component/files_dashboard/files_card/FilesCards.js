import React, { useState } from "react";
import FilesCardFolder from "./FilesCardFolder";
import FilesCard from "./FilesCard";

import folder_paper_icon from "../../../assets/folder_paper_icon.svg";
import docs_icon from "../../../assets/docs_icon.svg";
import pdf_icon from "../../../assets/pdf_icon.svg";
import psd_icon from "../../../assets/psd_icon.svg";
import pptx_icon from "../../../assets/pptx_icon.svg";

// fake data
const data = [
  {
    name: "Hikoot_Concept",
    icon: docs_icon
  },
  {
    name: "Hikoot_Proposal",
    icon: pdf_icon
  },
  {
    name: "Hikoot_Desktop",
    icon: psd_icon
  },
  {
    name: "Hikoot_Presentation",
    icon: pptx_icon
  }
];

// fc ==> files card
function FilesCards() {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState(1);
  const [selectedFile, setSelectedFile] = useState(0);

  function renderFilesCard() {
    return data.map(({ name, icon }, index) => {
      return (
        <FilesCard
          key={index}
          selectedFile={selectedFile === index}
          setSelectedFile={setSelectedFile}
          icon={icon}
          name={name}
          index={index}
        />
      );
    });
  }

  return (
    <section className="files-card">
      <div className="fc-tabs">
        <p
          className={`fc-tab ${activeTab === 0 && "fc-tab-active"}`}
          onClick={() => setActiveTab(0)}
        >
          Hikoot app
        </p>
        <p
          className={`fc-tab ${activeTab === 1 && "fc-tab-active"}`}
          onClick={() => setActiveTab(1)}
        >
          New bizz
        </p>
        <p
          className={`fc-tab ${activeTab === 2 && "fc-tab-active"}`}
          onClick={() => setActiveTab(2)}
        >
          My files
        </p>
      </div>

      <div className="fc-main">
        <div>
          <p className="fc-main-head">FOLDERS</p>

          <div className="fc-main-folders">
            <FilesCardFolder
              name="Base elements"
              active={selected === 0}
              onClick={() => setSelected(0)}
            />
            <FilesCardFolder
              name="Base elements"
              active={selected === 1}
              onClick={() => setSelected(1)}
              icon={folder_paper_icon}
            />
          </div>
        </div>

        <div>
          <p className="fc-main-head">FILES</p>

          <div className="fc-main-files">{renderFilesCard()}</div>
        </div>
      </div>
    </section>
  );
}

export default FilesCards;
