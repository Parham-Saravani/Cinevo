import { useEffect, useState } from "react";
import LoadingCard from "../../Loader/LoadingCard";
import ContentCard from "../elements/ContentCard";
import { removeContent as removeSeries } from "../../../Utilities/removeContent";
import Toast from "../../Toast/Toast";
import EmptyAdminSeriesDashboard from "../../Empty/EmptyAdminSeriesDashboard";
import Pagination from "../../Common/Pagination";
import { useLoaderData } from "react-router";
import AddModal from "../elements/AddModal/AddModal";
import BasicInformation from "../elements/AddModal/components/BasicInformation";
import Media from "../elements/AddModal/components/Media";
import Description from "../elements/AddModal/components/Description";
import Genres from "../elements/AddModal/components/Genres";
import Options from "../elements/AddModal/components/Options";
import Seasons from "../elements/AddModal/components/Seasons";
import ModalScreenshots from "../elements/AddModal/components/ModalScreenshots";
import UploadImagesAndRegisterContent from "../../../Utilities/registerNewContent";
import SerieValidator from "../../../Validators/SerieValidator";
import toast from "react-hot-toast";

function AdminSeries() {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSerie, setNewSerie] = useState({
    type: "series",
    title: "",
    releaseYear: "",
    director: "",
    duration: "",
    rating: "",
    ageRating: "",
    genres: [],
    totalScreenshots: [],
    seasons: [],
    bannerDescription: "",
    overview: "",
    isFeatured: false,
    isTrend: false,
    posterFile: null,
    bannerFile: null,
    trailerFile: null,
  });

  const data = useLoaderData();

  const removeContent = async (_id) => {
    const value = await removeSeries(_id, "/api/series");
    Toast(value);
    const filteredMovies = series.filter((item) => item._id !== _id);
    setSeries(filteredMovies);
  };

  const registerNewSerie = async () => {
    const status = SerieValidator.safeParse(newSerie);
    if (status.success) {
      const request = UploadImagesAndRegisterContent(newSerie, "/api/series");
      toast.promise(
        request,
        {
          loading: "Creating serie...",
          success: "Movie created successfully",
          error: "Something went wrong. Please try again.",
        },
        { style: { color: "white" } },
      );
      const data = await request;
      if (data.message === "MOVIE_CREATED") {
        setSeries((prev) => [
          ...prev,
          { genres: newSerie.genres.map((item) => item.title) },
        ]);
      }
      return data.message;
    }

    Toast({ children: status.error.issues[0].message });
  };

  useEffect(() => {
    if (data) {
      setLoading(false);
      return;
    }
    setError(true);
  }, []);
  return (
    <>
      <section className="space-y-5 animate-fadeIn">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
            Series
          </h1>

          <button
            onClick={() => {
              setIsAddModalOpen((prev) => !prev);
            }}
            className="bg-cta-primary text-text-primary px-5 py-3 rounded-xl text-sm cursor-pointer hover:bg-cta-primary/70 transition-colors duration-300"
          >
            Add Series
          </button>
        </div>
        <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
          <p className="text-text-secondary max-sm:text-xs">
            Manage all TV series and episodes.
          </p>
        </div>
        {series.length !== 0 && (
          <div className="grid gap-3 grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-3">
            {loading && series.length === 0
              ? Array.from({ length: 7 }).map((_, index) => {
                  return <LoadingCard key={index} />;
                })
              : series.map((item) => {
                  return (
                    <ContentCard
                      endPoint={"/api/series"}
                      onRemove={removeContent}
                      key={item._id}
                      data={item}
                    />
                  );
                })}
          </div>
        )}
        {series.length === 0 && <EmptyAdminSeriesDashboard />}
      </section>

      <AddModal
        title={"Add new Serie"}
        captoin={"Add a new serie to your content library."}
        setter={setNewSerie}
        onSubmit={registerNewSerie}
        isAddModalOpen={isAddModalOpen}
        setModalStatus={setIsAddModalOpen}
      >
        <main className="space-y-5 p-6 overflow-y-auto hide-scroll">
          <BasicInformation {...newSerie} setter={setNewSerie} />
          <Seasons value={newSerie.seasons} setter={setNewSerie} />
          <Media {...newSerie} setter={setNewSerie} />

          <Description
            bannerDesc={newSerie.bannerDesc}
            overview={newSerie.overview}
            setter={setNewSerie}
          />
          <Genres data={{ value: newSerie.genres, setter: setNewSerie }} />
          <ModalScreenshots
            setter={setNewSerie}
            value={newSerie.totalScreenshots}
          />
          <Options
            data={{
              setter: setNewSerie,
              trend: newSerie.isTrend,
              featured: newSerie.isFeatured,
            }}
          />
        </main>
      </AddModal>

      {!loading && (
        <Pagination data={data} setData={setSeries} itemPerPage={35} />
      )}
    </>
  );
}
export default AdminSeries;
