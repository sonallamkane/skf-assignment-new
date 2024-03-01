import useSWR from 'swr';
 
export interface Jock {
  type?: string;
  setup: string;
  punchline: string;
  id?: string;
}
 
const fetcher = async (url: string): Promise<Jock> => {
  const response = await fetch(url);
  return response.json();
};
 
const useJockes = () => {
  const apiUrl = `https://official-joke-api.appspot.com/random_ten`;
 
  const { data, error, isLoading } = useSWR<Jock, Error>(apiUrl, fetcher);
 
  return {
    data,
    error,
    isLoading
  };
};
 
export default useJockes;