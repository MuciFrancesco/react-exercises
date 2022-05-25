import React, { useState, useEffect } from "react";
import GitHubUserList from "./GitHubUserList";

function App() {
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateInput = (event) => {
    const value = event.target.value;
    setUser(value);
  };
  const updateList = () => {
    setUserList([...userList, data]);
    console.log(userList);
  };
  useEffect(() => {
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [userList]);
  return (
    <div className='App'>
      <>
        <div>
          <label>Inserisci utente: </label>
          <input value={user} onChange={updateInput} type='text'></input>
          <button onClick={updateList}>Aggiungi</button>
        </div>
        <GitHubUserList
          data={data}
          userList={userList}
          error={error}
          loading={loading}
        />
      </>
    </div>
  );
}

export default App;
