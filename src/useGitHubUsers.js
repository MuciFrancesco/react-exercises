import useSWR, { mutate } from "swr";

function useGitHubUsers(username) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error, loading } = useSWR(
    () => (username ? `https://api.github.com/users/${username}` : null),
    fetcher
  );
  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useGitHubUsers;
