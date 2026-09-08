import { useEffect } from "react";
import Header from "../Components/Header/Header";

function Series() {
  useEffect(() => {
    document.title = "Series | Cinevo";
  }, []);
  return (
    <>
      <header className="pt-5">
        <Header />
      </header>
    </>
  );
}

export default Series;
