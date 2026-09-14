import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import { FiSearch } from "react-icons/fi";
import Header from "../Components/Header/Header";
import Card from "../Components/Card/Card";
import LoadingCard from "../Components/Loader/LoadingCard";
import EmptySearch from "../Components/Empty/EmptySearch";
import searchRequest from "../Utilities/SearchRequest/SearchRequest";
import Toast from "../Components/Toast/Toast";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showDefaulElement, setShowDefaultElement] = useState(true);
  useEffect(() => {
    if (searchParams.get("q")) {
      setShowDefaultElement(false);
      setSearchValue(searchParams.get("q"));
      searchRequest(setLoading, searchParams.get("q"), setContent);
    }
    document.title = "Search | Cinevo";
  }, []);

  return (
    <>
      <header>
        <Header />

        <main className="mt-10 text-text-primary animate-fadeIn">
          <section>
            <div className="container mx-auto">
              <div>
                <h3 className="font-bold text-3xl max-sm:text-2xl">
                  Search Cinevo
                </h3>

                <p className="mt-1 text-text-secondary text-sm max-sm:text-xs">
                  Find movies and TV series from our collection.
                </p>
              </div>
              <div className="mt-7">
                <form className="flex gap-3 max-sm:flex-col">
                  <div className="relative flex-1">
                    <input
                      onInput={(event) => setSearchValue(event.target.value)}
                      value={searchValue}
                      type="text"
                      placeholder="Search movies, series..."
                      className="w-full h-13 rounded-xl bg-input-bg/50 border border-input-border/50 outline-hidden px-4 text-sm text-text-primary placeholder:text-text-secondary/40 transition-colors duration-300 hover:border-input-border-hover focus:border-input-border-focus/50"
                    />

                    <button
                      disabled={loading}
                      onClick={(event) => {
                        event.preventDefault();
                        if (!searchValue) {
                          Toast({
                            children:
                              "Please enter a movie or series name to search.",
                          });
                          return;
                        }
                        setShowDefaultElement(false);
                        setSearchParams(`?q=${searchValue}`);
                        searchRequest(setLoading, searchValue, setContent);
                      }}
                      type="submit  "
                      className={`${loading ? "px-9.5" : ""} absolute right-1.5 top-1/2 -translate-y-1/2 h-10 px-5 rounded-lg bg-cta-primary hover:bg-cta-primary/80 transition-colors duration-300 text-sm font-medium cursor-pointer disabled:bg-cta-primary/40 disabled:cursor-default`}
                    >
                      {loading ? (
                        <div className="rounded-full aspect-square w-3 h-3 animate-loader"></div>
                      ) : (
                        "Search"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {showDefaulElement && (
            <section className="mt-7 pb-10">
              <div className="container mx-auto">
                <div className="py-20 text-center">
                  <FiSearch className="mx-auto size-12 text-text-secondary/20" />

                  <h4 className="mt-4 text-xl font-semibold">
                    Search for something
                  </h4>

                  <p className="mt-2 text-sm text-text-secondary">
                    Enter a movie or series name to start searching.
                  </p>
                </div>
              </div>
            </section>
          )}

          <section className="mt-7 pb-5">
            <div className="container mx-auto">
              <div className="relative grid grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-5">
                {loading ? (
                  Array.from({ length: 7 }).map((item, index) => {
                    return <LoadingCard key={index} />;
                  })
                ) : !showDefaulElement && content.length === 0 ? (
                  <EmptySearch />
                ) : (
                  content.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="group rounded-xl overflow-hidden h-62"
                      >
                        <Card {...item} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Search;
