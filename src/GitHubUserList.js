import React from "react";
import GitHubUsers from "./GitHubUsers";

function GitHubUserList({
  username,
  fechUser,
  updateInput,
  updateList,
  error,
  loading,
}) {
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
