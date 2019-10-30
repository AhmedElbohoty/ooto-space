import React, { useState } from "react";
import Checkbox from "../../common/Checkbox";

function FilesSpaceSettings() {
  const [sharing, setSharing] = useState(true);
  const [backup, setBackup] = useState(false);
  const [dropbox, setDropbox] = useState(true);

  return (
    <div className="fs-setting">
      <div>
        <div className="fs-setting-checkbox">
          <p>File Sharing</p>
          <Checkbox id="sharing" value={sharing} setValue={setSharing} />
        </div>
        <p className="fs-setting-share">
          Turn on to share your file changes and updates
        </p>
      </div>

      <div className="fs-setting-checkbox">
        <p>Backup</p>
        <Checkbox id="backup" value={backup} setValue={setBackup} />
      </div>

      <div className="fs-setting-checkbox">
        <p>Dropbox Sync</p>
        <Checkbox id="dropbox" value={dropbox} setValue={setDropbox} />
      </div>
    </div>
  );
}

export default FilesSpaceSettings;
