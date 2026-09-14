import { baseUrl } from "../constants";

const searchRequest = async (setLoading, value, setData) => {
  console.log('requesting ... ',value);
  setLoading(true);
  try {
    const response = await fetch(`${baseUrl}/api/discover/search/${value}`);
    if (!response.ok) throw Error();
    const data = await response.json();
    console.log(data);
    
    setData([...data]);
  } catch (error) {
  } finally {
    setLoading(false);
  }
};

export default searchRequest;
