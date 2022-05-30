import React from "react";
import { useParams } from "react-router-dom";
import GitHubUsers from "./GitHubUsers";

function ShowGitHubUser() {
  const { username = "MuciFrancesco" } = useParams();
  return (
    <div>
      <GitHubUsers username={username} />
    </div>
  );
}

export default ShowGitHubUser;
