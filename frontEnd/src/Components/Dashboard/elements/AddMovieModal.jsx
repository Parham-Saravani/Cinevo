import { FaCheck } from "react-icons/fa";
import { useEffect, useId } from "react";
import { useState } from "react";
import { baseUrl } from "../../../Utilities/constants";
import Toast from "../../Toast/Toast";
import { uploadImage } from "../../../Utilities/uploadImage";
import MovieValidator from "../../../Validators/MovieValidator";

function AddMovieModal({ isAddModalOpen, setModalStatus }) {
  const id = useId();
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [posterFile, setPosterFile] = useState(null);
  const [posterFileTitle, setPoserFileTitle] = useState("");
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerFileTitle, setBannerFileTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [totalGenres, setTotalGenres] = useState([]);
  const [totalScreenshots, setTotalScreenshots] = useState([]);
  const [bannerDesc, setBannerDesc] = useState("");
  const [overview, setOverview] = useState("");
  const [trailerFile, setTrailerFile] = useState(null);
  const [trailerFileTitle, setTrailerFileTitle] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isTrend, setIsTrend] = useState(false);

  const [finalUpdatedData, setFinalUpdatedData] = useState({});

  useEffect(() => {
    setTitle("");
    setReleaseYear("");
    setDirector("");
    setDuration("");
    setRating("");
    setAgeRating("");
    setPosterFile(null);
    setPoserFileTitle("");
    setBannerFile(null);
    setBannerFileTitle("");
    setTotalGenres([]);

    setTotalScreenshots([]);
    setBannerDesc("");
    setOverview("");
    setTrailerFile(null);
    setTrailerFileTitle("");
    setIsFeatured(false);
    setIsTrend(false);
  }, []);

  const registernNewMovie = async () => {
    const data = addMovieValidator.safeParse({
      title,
      releaseYear: Number(releaseYear),
      director,
      duration,
      rating: Number(rating),
      ageRating,
      posterFile,
      bannerFile,
      trailerFile,
      totalGenres,
      totalScreenshots,
      bannerDesc,
      overview,
      isFeatured,
      isTrend,
    });
    console.log(data);

    if (data.success) {
      const posterUrl = await uploadImage(
        posterFile,
        title.split(" ").join(""),
      );
      return;
    }

    Toast({ children: data.error.issues[0].message });
  };

  const removeScreenshot = (id) => {
    const newData = totalScreenshots.filter((item) => item.id !== id);
    setTotalScreenshots(newData);
  };
  const removeGenreItem = (id) => {
    const newData = totalGenres.filter((item) => item.id !== id);
    setTotalGenres(newData);
  };
  return (
    <div
      className={`${isAddModalOpen ? "animate-fadeIn fixed" : "hidden"} z-100 fixed inset-0  flex items-center transition-all duration-300 justify-center bg-black/70 p-4 backdrop-blur-sm`}
    >
      <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden flex flex-col rounded-2xl border border-input-border bg-bg-primary shadow-2xl hide-scroll">
        {/* Header */}
        <div className="border-b border-input-border p-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Add New Movie
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              Add a new movie to your content library.
            </p>
          </div>

          <button
            onClick={() => setModalStatus(false)}
            type="button"
            className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-input-border/30 hover:text-text-primary"
          >
            ✕
          </button>
        </div>

        <main className="space-y-5 p-6 overflow-y-auto hide-scroll">
          {/* Basic Information */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Title
                </label>
                <input
                  value={title}
                  onInput={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="Interstellar"
                  className="h-11 w-full rounded-xl border border-input-border focus:border-input-border-focus transition-colors duration-300 bg-input-bg px-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Release Year
                </label>
                <input
                  value={releaseYear}
                  onInput={(event) => setReleaseYear(event.target.value)}
                  type="text"
                  placeholder="2014"
                  className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Director
                </label>
                <input
                  value={director}
                  onInput={(event) => setDirector(event.target.value)}
                  type="text"
                  placeholder="Christopher Nolan"
                  className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Duration
                  <span className="text-xs text-text-secondary">
                    (must be in minutes)
                  </span>
                </label>
                <input
                  value={duration}
                  onInput={(event) => setDuration(event.target.value)}
                  type="text"
                  placeholder="169"
                  className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Rating
                </label>
                <input
                  inputMode="numeric"
                  value={rating}
                  onInput={(event) => setRating(event.target.value)}
                  type="text"
                  step="0.1"
                  placeholder="8.7"
                  className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Age Rating
                </label>
                <input
                  value={ageRating}
                  onInput={(event) => setAgeRating(event.target.value)}
                  type="text"
                  placeholder="PG-13"
                  className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Media */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Media
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <input
                  value={posterFileTitle}
                  className="text-text-primary focus:border-input-border-focus transition-colors duration-300 py-3 px-4 w-full bg-input-bg border border-input-border rounded-xl outline-hidden placeholder:text-text-secondary/50"
                  placeholder="Upload poster"
                  readOnly
                ></input>
                <label
                  htmlFor={id + "poster"}
                  className="py-2 px-2 bg-cta-primary rounded-xl hover:bg-cta-primary/70 transition-colors duration-300 cursor-pointer block text-sm font-medium text-text-primary"
                >
                  Upload
                  <input
                    accept="image/*"
                    onChange={(event) => {
                      setPoserFileTitle(event.target.files[0].name);
                      setPosterFile(event.target.files[0]);
                    }}
                    id={id + "poster"}
                    hidden
                    type="file"
                  />
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  value={bannerFileTitle}
                  className="text-text-primary focus:border-input-border-focus transition-colors duration-300 py-3 px-4 w-full bg-input-bg border border-input-border outline-hidden rounded-xl placeholder:text-text-secondary/50"
                  placeholder="Upload banner"
                  readOnly
                ></input>
                <label
                  htmlFor={id + "banner"}
                  className="py-2 px-2 bg-cta-primary rounded-xl hover:bg-cta-primary/70 transition-colors duration-300 cursor-pointer block text-sm font-medium text-text-primary"
                >
                  Upload
                  <input
                    accept="image/*"
                    onChange={(event) => {
                      setBannerFileTitle(event.target.files[0].name);
                      setBannerFile(event.target.files[0]);
                    }}
                    id={id + "banner"}
                    hidden
                    type="file"
                  />
                </label>
              </div>

              {/* <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Video URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-primary"
                  />
                </div>*/}

              <div className="flex items-center gap-2">
                <input
                  value={trailerFileTitle}
                  className="text-text-primary focus:border-input-border-focus transition-colors duration-300 py-3 px-4 w-full bg-input-bg border border-input-border outline-hidden rounded-xl placeholder:text-text-secondary/50"
                  placeholder="Upload trailer"
                  readOnly
                ></input>
                <label
                  htmlFor={id + "banner"}
                  className="py-2 px-2 bg-cta-primary rounded-xl hover:bg-cta-primary/70 transition-colors duration-300 cursor-pointer block text-sm font-medium text-text-primary"
                >
                  Upload
                  <input
                    accept=".mp4"
                    onChange={(event) => {
                      setTrailerFileTitle(event.target.files[0].name);
                      setTrailerFile(event.target.files[0]);
                    }}
                    id={id + "banner"}
                    hidden
                    type="file"
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Description */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Description
            </h3>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Overview
                </label>
                <textarea
                  value={overview}
                  onInput={(event) => setOverview(event.target.value)}
                  rows="6"
                  placeholder="Write a short description about the movie..."
                  className="focus:border-input-border-focus transition-colors duration-300 w-full resize-none rounded-xl border border-input-border bg-input-bg p-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Banner Description
                </label>
                <textarea
                  value={bannerDesc}
                  onInput={(event) => setBannerDesc(event.target.value)}
                  rows="6"
                  placeholder="Description displayed on the hero banner..."
                  className="focus:border-input-border-focus transition-colors duration-300 w-full resize-none rounded-xl border border-input-border bg-input-bg p-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Genres */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Genres
            </h3>

            <div className="flex gap-2">
              <input
                value={genre}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (!genre) {
                      Toast({ children: "Please enter a genre first" });
                      return;
                    }
                    setGenre("");
                    setTotalGenres((prev) => [
                      ...prev,
                      { id: crypto.randomUUID(), title: genre },
                    ]);
                  }
                }}
                onInput={(event) => setGenre(event.target.value)}
                type="text"
                placeholder="e.g. Sci-Fi"
                className="focus:border-input-border-focus transition-colors duration-300 h-11 flex-1 rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
              />

              <button
                onClick={() => {
                  if (!genre) {
                    Toast({ children: "Please enter a genre first" });
                    return;
                  }
                  setGenre("");
                  setTotalGenres((prev) => [
                    ...prev,
                    { id: crypto.randomUUID(), title: genre },
                  ]);
                }}
                type="button"
                className="rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-cta-primary/70 bg-cta-primary cursor-pointer"
              >
                Add
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {totalGenres.map((item) => {
                return (
                  <span
                    key={item.id}
                    className="animate-fadeIn flex items-center gap-2 rounded-lg bg-input-bg/50 text-text-secondary   px-3 py-1.5 text-sm text-primary"
                  >
                    {item.title}
                    <button
                      onClick={() => removeGenreItem(item.id)}
                      className="hover:bg-input-border/40 rounded-full w-6 h-6 inline-flex justify-center items-center text-xs transition-colors duration-300 cursor-pointer"
                      type="button"
                    >
                      ✕
                    </button>
                  </span>
                );
              })}
              {/* <span className="flex items-center gap-2 rounded-lg bg-input-bg/50 text-text-secondary   px-3 py-1.5 text-sm text-primary">
                Sci-Fi
                <button
                  className="hover:bg-input-border/40 rounded-full w-6 h-6 inline-flex justify-center items-center text-xs transition-colors duration-300 cursor-pointer"
                  type="button"
                >
                  ✕
                </button>
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-input-bg/50 text-text-secondary   px-3 py-1.5 text-sm text-primary">
                Sci-Fi
                <button
                  className="hover:bg-input-border/40 rounded-full w-6 h-6 inline-flex justify-center items-center text-xs transition-colors duration-300 cursor-pointer"
                  type="button"
                >
                  ✕
                </button>
              </span> */}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Screenshots
            </h3>

            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2 rounded-xl border border-input-border bg-input-bg px-4 py-2 text-sm text-text-primary min-h-11 h-fit w-full">
                {totalScreenshots.map((item, index) => {
                  return (
                    <span
                      key={item.id}
                      className="flex items-center gap-2 rounded-lg bg-bg-primary/50 text-text-secondary px-3 py-1.5 text-sm text-primary"
                    >
                      Screenshot {index + 1}
                      <button
                        onClick={() => removeScreenshot(item.id)}
                        className="hover:bg-input-border/40 rounded-full w-6 h-6 inline-flex justify-center items-center text-xs transition-colors duration-300 cursor-pointer"
                        type="button"
                      >
                        ✕
                      </button>
                    </span>
                  );
                })}
              </div>

              <label
                htmlFor={id + "screenshot"}
                className="flex items-center justify-center px-3 py-2 rounded-xl bg-primary text-sm font-medium text-white transition-colors duration-300 hover:bg-cta-primary/70 bg-cta-primary cursor-pointer"
              >
                Upload
                <input
                  accept="image/*"
                  onChange={(event) => {
                    setTotalScreenshots((prev) => [
                      ...prev,
                      { id: crypto.randomUUID(), file: event.target.files[0] },
                    ]);
                  }}
                  hidden
                  type="file"
                  id={id + "screenshot"}
                />
              </label>
            </div>
          </section>

          {/* Options */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Options
            </h3>

            <div className="flex gap-6">
              <div className="flex items-center text-text-secondary text-xs">
                <label
                  htmlFor={id + "featured"}
                  className="h-4 w-4 bg-input-border/50 rounded-md text-transparent flex cursor-pointer justify-center items-center gap-3 text-sm transition-colors featured-checkbox mr-1.5"
                >
                  <input
                    checked={isFeatured}
                    onChange={(event) => setIsFeatured(event.target.checked)}
                    id={id + "featured"}
                    hidden
                    type="checkbox"
                    className="h-4 w-4 accent-primary"
                  />
                  <FaCheck className="size-3 fill-current" />
                </label>
                Featured
              </div>

              <div className="flex items-center text-text-secondary text-xs">
                <label
                  htmlFor={id + "trending"}
                  className="h-4 w-4 bg-input-border/50 rounded-md text-transparent flex cursor-pointer justify-center items-center gap-3 text-sm transition-colors trending-checkbox mr-1.5"
                >
                  <input
                    checked={isTrend}
                    onChange={(event) => setIsTrend(event.target.checked)}
                    id={id + "trending"}
                    hidden
                    type="checkbox"
                    className="h-4 w-4 accent-primary"
                  />
                  <FaCheck className="size-3 fill-current" />
                </label>
                Trending
              </div>
            </div>
          </section>
        </main>

        <footer className="flex justify-end gap-3 border-t border-input-border p-6 pt-5">
          <button
            onClick={() => setModalStatus(false)}
            type="button"
            className="cursor-pointer rounded-xl border border-input-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:bg-input-border/20 hover:text-text-primary"
          >
            Cancel
          </button>

          <button
            onClick={registernNewMovie}
            type="button"
            className="cursor-pointer bg-cta-primary hover:bg-cta-primary/70 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300"
          >
            Create Movie
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AddMovieModal;
