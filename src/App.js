import React, { useState, useEffect } from "react";
import GitHubUserList from "./GitHubUserList";
import GitHubUsers from "./GitHubUsers";

function App() {
  const [user, Setuser] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    getData();
  }, []);

  return (
    <div className='App'>
      <>
        <div>
          <label>Inserisci utente: </label>
          <input type='text'></input>
          <button>Aggiungi</button>
        </div>
        <GitHubUsers
          loading={loading}
          error={error}
          data={data}
          username={"MuciFrancesco"}
        />
      </>
    </div>
  );
}

export default App;
