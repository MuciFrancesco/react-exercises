import React, { useState, useEffect } from "react";

function useGitHubUsers(username) {
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
    getData(username);
  }, [username]);

  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useGitHubUsers;
