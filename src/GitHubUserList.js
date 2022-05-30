import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GitHubUserList() {
  const [userList, setUserList] = useState([]);
  const [username, setUser] = useState("");

  const updateInput = (event) => {
    const value = event.target.value;
    setUser(value);
  };
  const updateList = () => {
    setUserList([...userList, username]);
    setUser("");
  };

  return (
    <div>
      <div>
        <label>Inserisci utente: </label>
        <input value={username} onChange={updateInput} />
        <button type='button' onClick={updateList}>
          Aggiungi
        </button>
      </div>
      {userList.map((user, i) => (
        <>
          <li key={i}>
            <Link to={`/user/${user}`}>{user}</Link>
          </li>
        </>
      ))}
      <Outlet />
    </div>
  );
}

export default GitHubUserList;
