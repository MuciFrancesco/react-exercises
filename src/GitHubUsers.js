import React from "react";

function GitHubUsers({ username, data, loading, error }) {
  return (
    <div>
      {loading && <h1>loading...</h1>}
      {error && <h1>Sorry we have a problem !</h1>}
      {data && (
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
      )}
    </div>
  );
}

export default GitHubUsers;
