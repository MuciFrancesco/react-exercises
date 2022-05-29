import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function GitHubUsers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { username = "MuciFrancesco" } = useParams();

  const getData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData(username);
  }, [username]);

  return (
    <div>
      {loading && <h1>loading...</h1>}
      {error && <h1>Sorry we have a problem !</h1>}
      {data && (
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
      <Link to='/welcome'>
        {" "}
        <button>Return to Welcome App</button>
      </Link>
      <Link to='/counter'>
        {" "}
        <button>Return to Counter App</button>
      </Link>
      <Link to='/'>
        <button>Go to Main App</button>{" "}
      </Link>
    </div>
  );
}

export default GitHubUsers;
