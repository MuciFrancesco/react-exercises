import useSWR, { mutate } from "swr";

function useGitHubUsers(username) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error, loading, mutate } = useSWR(
    () => (username ? `https://api.github.com/users/${username}` : null),
    fetcher
  );

  const handleReloadData = () => {
    mutate();
    console.log(username);
  };

  return {
    data: data,
    loading: loading,
    error: error,
    handleReloadData: handleReloadData,
  };
}

export default useGitHubUsers;
