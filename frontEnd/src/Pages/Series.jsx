import { useEffect } from "react";

function Series() {
  useEffect(() => {
    document.title = "Series | Cinevo";
  }, []);
  return (
    <div>Series</div>
  )
}

export default Series