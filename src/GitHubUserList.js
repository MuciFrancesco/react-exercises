import React, { useEffect, useState } from "react";
import GitHubUsers from "./GitHubUsers";

function GitHubUserList({ userList, data, error, loading }) {
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
