import React from "react";
import { withRouter } from "react-router-dom";
import SVG from "react-svg";

import logo from "../../assets/logo.svg";
import dashboard_icon from "../../assets/dashboard_icon.svg";
import sessions_icon from "../../assets/sessions_icon.svg";
import meetings_icon from "../../assets/meetings_icon.svg";
import files_board_icon from "../../assets/files_board_icon.svg";
import conversations_icon from "../../assets/conversations_icon.svg";
import settings_icon from "../../assets/settings_icon.svg";

function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav id="nav">
      <SVG className="nav-logo" src={logo} />
      <div className="nav-icon" onClick={() => setActiveSection("dashboard")}>
        {activeSection === "dashboard" && <div className="nav-indicator"></div>}
        <SVG src={dashboard_icon} />
      </div>
      <div className="nav-icon" onClick={() => setActiveSection("sessions")}>
        {activeSection === "sessions" && <div className="nav-indicator"></div>}
        <SVG src={sessions_icon} />
      </div>
      <div className="nav-icon" onClick={() => setActiveSection("meetings")}>
        {activeSection === "meetings" && <div className="nav-indicator"></div>}
        <SVG src={meetings_icon} />
      </div>
      <div className="nav-icon" onClick={() => setActiveSection("files")}>
        {activeSection === "files" && <div className="nav-indicator"></div>}
        <SVG src={files_board_icon} />
      </div>
      <div
        className="nav-icon"
        onClick={() => setActiveSection("conversations")}
      >
        {activeSection === "conversations" && (
          <div className="nav-indicator"></div>
        )}
        <SVG src={conversations_icon} />
      </div>
      <div className="nav-icon" onClick={() => setActiveSection("settings")}>
        {activeSection === "settings" && <div className="nav-indicator"></div>}
        <SVG src={settings_icon} />
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
