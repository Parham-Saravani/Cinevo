import { baseUrl } from "../constants";
const filtering = async (
  loadingState,
  typeValue = undefined,
  setContent,
  searchParams,
) => {
  loadingState(true);
  const filters = {};
  const year = searchParams.get("year");
  const genre = searchParams.get("genre");
  const type = searchParams.get("type");
  if (year) filters.year = year;
  if (genre) filters.genre = genre;
  filters.type = type || typeValue;

  (async () => {
    try {
      const response = await fetch(`${baseUrl}/api/discover/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
      if (!response.ok) throw Error();
      const data = await response.json();
      
      setContent(data);
    } catch (error) {
    } finally {
      loadingState(false);
    }
  })();
};
export default filtering;
