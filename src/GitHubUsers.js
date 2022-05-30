import React, { useEffect, useState } from "react";

function GitHubUsers({ username }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Sorry we have some problem!</h1>}
      {data && (
        <div>
          <h1>{data.name || "user not found"}</h1>
          <img src={data.avatar_url || "img not found"} alt='img-profile' />
          <p>{data.bio || "bio not found "}</p>
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
