import { baseUrl } from "../constants";

const searchRequest = async (setLoading, value, setData, setError) => {
    setLoading(true);
  try {
    const response = await fetch(`${baseUrl}/api/discover/search/${value}`);
    if (!response.ok) throw Error();
    const data = await response.json();
    setData([...data]);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
  }
};

export default searchRequest;
