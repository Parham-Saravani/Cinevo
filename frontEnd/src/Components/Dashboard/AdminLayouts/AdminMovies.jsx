import { useEffect, useState, useId } from "react";
import { baseUrl } from "../../../Utilities/constants";
import LoadingCard from "../../Loader/LoadingCard";
import ContentCard from "../elements/ContentCard";
import AddModal from "../elements/AddModal/AddModal";
import { removeContent as removeMovie } from "../../../Utilities/removeContent";
import Toast from "../../Toast/Toast";
import EmptyAdminMoviesDashboard from "../../Empty/EmptyAdminMoviesDashboard";
import BasicInformation from "../elements/AddModal/components/BasicInformation";
import Description from "../elements/AddModal/components/Description";
import Genres from "../elements/AddModal/components/Genres";
import Media from "../elements/AddModal/components/Media";
import Options from "../elements/AddModal/components/Options";
import ModalScreenshots from "../elements/AddModal/components/ModalScreenshots";
import MovieValidator from "../../../Validators/MovieValidator";
import UploadImagesAndRegisterContent from "../../../Utilities/registerNewContent";
import toast from "react-hot-toast";

function AdminMovies() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (console.log(movies), [movies]);
  });
  const [newMovie, setNewMovie] = useState({
    type: "movie",
    title: "",
    releaseYear: "",
    director: "",
    duration: "",
    rating: "",
    cast: [],
    ageRating: "",
    genres: [],
    totalScreenshots: [],
    bannerDescription: "",
    overview: "",
    isFeatured: false,
    isTrend: false,
    posterFile: null,
    bannerFile: null,
    trailerFile: null,
  });

  const removeContent = async (_id) => {
    const value = await removeMovie(_id, "/api/movies");
    Toast(value);
    const filteredMovies = movies.filter((item) => item._id !== _id);
    setMovies(filteredMovies);
  };

  const registerNewMovie = async () => {
    const status = MovieValidator.safeParse(newMovie);
    if (status.success) {
      const request = UploadImagesAndRegisterContent(newMovie);
      toast.promise(
        request,
        {
          loading: "Creating movie...",
          success: "Movie created successfully",
          error: "Something went wrong. Please try again.",
        },
        { style: { color: "white" } },
      );
      const data = await request;
      if (data.message === "MOVIE_CREATED") {
        setMovies((prev) => [
          ...prev,
          { ...newMovie, genres: newMovie.genres.map((item) => item.title) },
        ]);
      }
      return data.message;
    }

    Toast({ children: status.error.issues[0].message });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/api/movies`);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return navigate("/error", {
      state: {
        hideStatusCode: true,
        title: "Connection Failed",
        desc: "Cinevo couldn't connect to the server. Please check your internet connection and make sure your VPN is enabled if you're accessing the service from a restricted region.",
      },
    });
  }

  return (
    <>
      <section className="space-y-5 animate-fadeIn">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
            Movies
          </h1>

          <button
            onClick={() => {
              setIsAddModalOpen((prev) => !prev);
            }}
            className="bg-cta-primary text-text-primary px-5 py-3 rounded-xl text-sm cursor-pointer hover:bg-cta-primary/70 transition-colors duration-300"
          >
            Add Movie
          </button>
        </div>

        <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
          <p className="text-text-secondary max-sm:text-xs">
            Manage all movies available on Cinevo.
          </p>
        </div>
        {movies.length !== 0 && (
          <div className="grid gap-3 grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-3">
            {loading && movies.length === 0
              ? Array.from({ length: 7 }).map((_, index) => {
                  return <LoadingCard key={index} />;
                })
              : movies.map((item) => {
                  return (
                    <ContentCard
                      endPoint={"/api/movies"}
                      onRemove={removeContent}
                      key={item._id}
                      data={item}
                    />
                  );
                })}
          </div>
        )}
        {movies.length === 0 && <EmptyAdminMoviesDashboard />}
      </section>
      <AddModal
        title={"Add new Movie"}
        captoin={"Add a new movie to your content library."}
        setter={setNewMovie}
        onSubmit={registerNewMovie}
        isAddModalOpen={isAddModalOpen}
        setModalStatus={setIsAddModalOpen}
      >
        <main className="space-y-5 p-6 overflow-y-auto hide-scroll">
          <BasicInformation {...newMovie} setter={setNewMovie} />

          <Media {...newMovie} setter={setNewMovie} />

          <Description
            bannerDescription={newMovie.bannerDescription}
            overview={newMovie.overview}
            setter={setNewMovie}
          />
          <Genres data={{ value: newMovie.genres, setter: setNewMovie }} />
          <ModalScreenshots
            setter={setNewMovie}
            value={newMovie.totalScreenshots}
          />
          <Options
            data={{
              setter: setNewMovie,
              trend: newMovie.isTrend,
              featured: newMovie.isFeatured,
            }}
          />
        </main>
      </AddModal>
    </>
  );
}
export default AdminMovies;
