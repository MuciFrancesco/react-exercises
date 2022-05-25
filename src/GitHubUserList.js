import React, { useEffect } from "react";
import GitHubUsers from "./GitHubUsers";

function GitHubUserList({ userList, loading, error, data }) {
  return (
    <div>
      {userList.map((user, i) => (
        <GitHubUsers
          key={i}
          loading={loading}
          error={error}
          data={data}
          username={user}
        />
      ))}
    </div>
  );
}

export default GitHubUserList;
