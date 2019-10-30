import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Topbar from "./topbar/Topbar";
import FilesDashBoard from "./files_dashboard/FilesDashBoard";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("files");

  return (
    <section id="l-dashboard">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div>
        <Topbar />

        {activeSection === "files" && <FilesDashBoard />}
      </div>
    </section>
  );
}

export default Dashboard;
