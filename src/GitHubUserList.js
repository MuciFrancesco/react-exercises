import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GitHubUsers from "./GitHubUsers";

function GitHubUserList() {
  const [userList, setUserList] = useState([]);
  const [username, setUser] = useState("");
  const [fechUser, setFechUser] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const lastUser =
    userList[userList.length - 1] === userList[userList.length - 2] ||
    userList[userList.length - 1] === ""
      ? null
      : userList[userList.length - 1];

  const updateInput = (event) => {
    const value = event.target.value;
    setUser(value);
  };
  const updateList = () => {
    setUserList([...userList, username]);
    setUser("");
  };

  useEffect(() => {
    if (lastUser != null) {
      (async () => {
        try {
          const response = await fetch(
            `https://api.github.com/users/${lastUser}`
          );
          const json = await response.json();
          console.log(json);
          setFechUser((prevUser) => [...prevUser, json]);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [lastUser]);
  return (
    <div>
      <div>
        <label>Inserisci utente: </label>
        <input value={username} onChange={updateInput} />
        <button type='button' onClick={updateList}>
          Aggiungi
        </button>
      </div>
      {fechUser.map((user, i) => (
        <GitHubUsers key={i} username={user} error={error} loading={loading} />
      ))}
    </div>
  );
}

export default GitHubUserList;
