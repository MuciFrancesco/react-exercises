import React from "react";
import useSWR from "swr";

function useGitHubUsers(username) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error, loading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useGitHubUsers;
