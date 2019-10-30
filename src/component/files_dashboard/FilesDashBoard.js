import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilesDocuments from "./file_documents/FilesDocuments";
import FilesCards from "./files_card/FilesCards";
import FilesSpace from "./files_space/FilesSpace";

function FilesDashBoard() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <section id="files-dashboard">
        <FilesDocuments selected={selected} setSelected={setSelected} />

        <FilesCards />

        <FilesSpace />
      </section>

      <footer id="footer">
        Designed by
        <Link to="https://dribbble.com/madacs_a"> Adrian Madacs</Link>
      </footer>
    </>
  );
}

export default FilesDashBoard;
