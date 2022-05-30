import React from "react";
import useGitHubUsers from "./useGitHubUsers";

function GitHubUsers({ username }) {
  const { data, error } = useGitHubUsers(username);

  return (
    <div>
      {!data && !error && <h1>loading...</h1>}
      {error && <h1>Sorry we have a problem !</h1>}
      {data && !error && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} alt='img-profile' />
          <p>{data.bio}</p>
          <button>
            <a href={data.html_url} target='_blank' rel='noreferrer'>
              Visita il mio GitHub
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

export default GitHubUsers;
