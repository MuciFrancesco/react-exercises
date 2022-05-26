import React, { useState, useEffect } from "react";
import GitHubUserList from "./GitHubUserList";

function App() {
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
    <div className='App'>
      <>
        <GitHubUserList
          error={error}
          loading={loading}
          username={username}
          fechUser={fechUser}
          updateInput={updateInput}
          updateList={updateList}
        />
      </>
    </div>
  );
}

export default App;
