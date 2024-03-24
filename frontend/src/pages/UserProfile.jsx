import React, { useState } from "react";

function UserProfile() {
  const [github, setGithub] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="flex justify-start items-center">
      <div>Menu Bar</div>
      <div>
        <div className="heading"></div>
        <div className="userDetails"></div>
        <div className="github">
          <input
            type="text"
            className="px-4 py-2 rounded-lg border-none bg-[#272727] text-white"
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            placeholder="Enter your github profile"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 border-none bg-blue-400"
          >
            Submit
          </button>
        </div>
        <div className="leetcode"></div>
      </div>
    </div>
  );
}

export default UserProfile;
