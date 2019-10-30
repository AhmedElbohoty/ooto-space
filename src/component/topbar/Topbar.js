import React, { useState } from "react";
import SVG from "react-svg";

import search_icon from "../../assets/search_icon.svg";
import paper_plane_icon from "../../assets/paper_plane_icon.svg";
import profile from "../../assets/profile.jpg";

function Topbar() {
  const [search, setSearch] = useState("");

  return (
    <section id="topbar">
      <div className="topbar-search">
        <SVG className="topbar-search-icon" src={search_icon} />
        <input
          className="topbar-search-input"
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder="Find everything..."
        />
      </div>

      <div className="topbar-profile-container">
        <div className="topbar-invite-btn">
          <SVG className="topbar-invite-icon" src={paper_plane_icon} />
          <p>Invite</p>
        </div>

        <img className="topbar-profile-img" src={profile} />
      </div>
    </section>
  );
}

export default Topbar;
