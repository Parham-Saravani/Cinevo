import { useEffect, useId, useState } from "react";
import Modal from "../../Modal/Modal";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { uploadImage } from "../../../Utilities/uploadImage";
import Toast from "../../Toast/Toast";
import MovieValidator from "../../../Validators/MovieValidator";
import { updateContent } from "../../../Utilities/updateContent";

function EditBtn({ data }) {
  const [title, setTitle] = useState(data.title);
  const [releaseYear, setReleaseYear] = useState(data.releaseYear);
  const [director, setDirector] = useState(data.director);
  const [duration, setDuration] = useState(data.duration);
  const [bannerDesc, setBannerDesc] = useState(data.bannerDescription);
  const [overview, setOverview] = useState(data.overview);
  const [rating, setRating] = useState(data.rating);
  const [ageRating, setAgeRating] = useState(data.ageRating);
  const [posterFile, setPosterFile] = useState(null);
  const [posterFileTitle, setPoserFileTitle] = useState(data.poster);
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerFileTitle, setBannerFileTitle] = useState(data.banner);
  const [trailerFile, setTrailerFile] = useState(null);
  const [trailerFileTitle, setTrailerFileTitle] = useState(data.trailer);
  const [genre, setGenre] = useState("");
  const [totalGenres, setTotalGenres] = useState(data.genres);
  const [totalScreenshots, setTotalScreenshots] = useState(data.screenshots);
  const [isFeatured, setIsFeatured] = useState(data.featured);
  const [isTrend, setIsTrend] = useState(data.trending);

  const id = useId();
  const EditBtn = () => {
    return (
      <button className="cursor-pointer hover:bg-blue-600/70 flex h-11 w-11 max-2xl:w-9 max-2xl:h-9 max-xl:w-8 max-xl:h-8 max-xl:text-sm items-center justify-center rounded-full bg-blue-800 text-white transition-colors duration-300">
        <FaEdit />
      </button>
    );
  };
  const editHandler = async () => {
    const validator = MovieValidator.safeParse({
      title,
      releaseYear,
      director,
      duration,
      bannerDesc,
      overview,
      rating,
      ageRating,
      // posterFile,
      // bannerFile,
      // trailerFile,
      totalGenres,
      totalScreenshots,
      isFeatured,
      isTrend,
    });
    if (validator.success) {
      const updatedData = {
        title,
        releaseYear,
        director,
        duration,
        bannerDescription: bannerDesc,
        overview,
        rating,
        ageRating,
        genres: totalGenres,
        screenshots: totalScreenshots,
        featured: isFeatured,
        trending: isTrend,
      };
      if (posterFile) {
        const newPoster = await uploadImage(
          posterFile,
          title.split(" ").join(""),
        );
        if (!newPoster) {
          Toast({
            children: "Something went wrong. Please try again.",
            isError: true,
          });
          return;
        }

        updatedData.poster = newPoster;
      }
      if (bannerFile) {
        const newBanner = await uploadImage(
          bannerFile,
          title.split(" ").join(""),
        );
        if (!newBanner) {
          Toast({
            children: "Something went wrong. Please try again.",
            isError: true,
          });
          return;
        }

        updatedData.banner = newBanner;
      }
      if (trailerFile) {
        const newTrailer = await uploadImage(
          trailerFile,
          title.split(" ").join(""),
        );
        if (!newTrailer) {
          Toast({
            children: "Something went wrong. Please try again.",
            isError: true,
          });
          return;
        }

        updatedData.trailer = newTrailer;
      }
      const updateStatus = await updateContent(
        data._id,
        updatedData,
        "/api/movies",
      );
      Toast(updateStatus);
      return;
    }
    Toast({ children: validator.error.issues[0].message });
  };
  const removeScreenshot = (value) => {
    const newScreenshots = totalScreenshots.filter((item) => item !== value);
    setTotalScreenshots(newScreenshots);
  };
  const removeGenre = (value) => {
    const newGenres = totalGenres.filter((item) => item !== value);
    setTotalGenres(newGenres);
  };
  return (
    <Modal onSubmit={editHandler} Trigger={EditBtn} title={"Edit Content"}>
      <div className="space-y-5">
        {/* Basic Information */}
        <section>
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
                Duration{" "}
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
          <div className="grid grid-cols-1 gap-4 text-sm">
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">
                Poster
              </label>
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
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">
                Banner
              </label>
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

            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">
                Trailer
              </label>
              <div className="flex items-center gap-2">
                <input
                  value={trailerFileTitle}
                  className="text-text-primary focus:border-input-border-focus transition-colors duration-300 py-3 px-4 w-full bg-input-bg border border-input-border outline-hidden rounded-xl placeholder:text-text-secondary/50"
                  placeholder="Upload trailer"
                  readOnly
                ></input>
                <label
                  htmlFor={id + "trailer"}
                  className="py-2 px-2 bg-cta-primary rounded-xl hover:bg-cta-primary/70 transition-colors duration-300 cursor-pointer block text-sm font-medium text-text-primary"
                >
                  Upload
                  <input
                    accept="video/*"
                    onChange={async (event) => {
                      setTrailerFileTitle(event.target.files[0].name);
                      setTrailerFile(event.target.files[0]);
                    }}
                    id={id + "trailer"}
                    hidden
                    type="file"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section>
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
                className="custom-scroll focus:border-input-border-focus transition-colors duration-300 w-full resize-none rounded-xl border border-input-border bg-input-bg p-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
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
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Genres
          </label>
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
                  setTotalGenres((prev) => [...prev, genre]);
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
                setTotalGenres((prev) => [...prev, genre]);
              }}
              type="button"
              className="rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-cta-primary/70 bg-cta-primary cursor-pointer"
            >
              Add
            </button>
          </div>

          <div className="max-sm:text-[10px]! text-sm mt-3 flex flex-wrap gap-2">
            {totalGenres.map((item, index) => {
              return (
                <span
                  key={index}
                  className="animate-fadeIn flex items-center gap-2 rounded-lg bg-input-bg/50 text-text-secondary px-3 max-sm:px-2 max-sm:py-1 py-1.5 text-primary"
                >
                  {item}
                  <button
                    onClick={() => removeGenre(item)}
                    className="hover:bg-input-border/40 max-sm:w-4 max-sm:h-4 rounded-full w-6 h-6 inline-flex justify-center items-center transition-colors duration-300 cursor-pointer"
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
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Screenshots
          </label>
          <div className="flex w-full flex-col items-center justify-between gap-2">
            {totalScreenshots.length !== 0 ? (
              <div className="grid grid-cols-1 flex-wrap gap-2">
                {totalScreenshots.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="group text-text-secondary relative col-span-1 flex w-full items-center gap-2 truncate rounded-lg bg-input-bg/50 px-3 py-3 text-sm text-primary max-sm:text-xs max-sm:leading-2"
                    >
                      {item}

                      <div className="ml-auto inline-flex items-center justify-center rounded-lg text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-input-border/50 absolute inset-0 h-full w-full">
                        <button
                          onClick={() => removeScreenshot(item)}
                          className="hover:bg-bg-primary/50 rounded-full transition-colors duration-300 cursor-pointer h-6 w-6"
                        >
                          ✕
                        </button>
                      </div>
                    </span>
                  );
                })}
              </div>
            ) : (
              <span className="w-full rounded-lg text-center py-3 bg-linear-to-br from-cta-primary/10 via-transparent to-cta-primary/10 text-sm text-text-primary">
                No screenshots added yet.
              </span>
            )}

            <label
              htmlFor={id + "screenshot"}
              className="w-full flex items-center justify-center px-3 py-2 rounded-xl bg-primary text-sm font-medium text-white transition-colors duration-300 hover:bg-cta-primary/70 bg-cta-primary cursor-pointer"
            >
              Upload
              <input
                onChange={async (event) => {
                  if (totalScreenshots.length === 4) {
                    Toast({
                      children: "You can upload up to 4 screenshots only.",
                    });
                    return;
                  }
                  if (!title) {
                    Toast({
                      children: "Please enter the content title first.",
                    });
                    return;
                  }
                  const newScreenShot = await uploadImage(
                    event.target.files[0],
                    title.split(" ").join(""),
                  );
                  if (!newScreenShot) {
                    Toast({
                      children:
                        "Failed to upload the screenshot. Please try again.",
                    });
                    return;
                  }
                  setTotalScreenshots((prev) => [...prev, newScreenShot]);
                  Toast({
                    children: "Screenshot added successfully.",
                    isError: false,
                  });
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
          <label className="mb-4 block text-sm font-medium text-text-primary">
            Options
          </label>
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
      </div>
    </Modal>
  );
}

export default EditBtn;

