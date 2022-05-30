import React from "react";
import { useParams } from "react-router-dom";

function GitHubUsers({ username, error, loading }) {
  const { user } = useParams();
  return (
    <div>
      {loading && <h1>loading...</h1>}
      {error && <h1>We have some problem...sorry </h1>}
      <div>
        <h1>{username.name || "user not found"}</h1>
        <img src={username.avatar_url || "img not found"} alt='img-profile' />
        <p>{username.bio || "bio not found "}</p>
        <button>
          <a href={username.html_url} target='_blank' rel='noreferrer'>
            Visita il mio GitHub
          </a>
        </button>
      </div>
    </div>
  );
}

export default GitHubUsers;
