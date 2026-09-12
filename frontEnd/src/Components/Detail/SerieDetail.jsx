import QuickInfo from "./elements/QuickInfo";
import { useId, useState } from "react";
import Cast from "./elements/Cast";
import Season from "./elements/Season";
import Episodes from "./elements/Episodes";
import Trailer from "./elements/Trailer";
import ScreenShot from "./elements/ScreenShot";
import Slider from "../Slider/Slider";
import Section from "./Section";
import Comment from "../Comment/Comment";
import Content from "./Content";
import CommentFrom from "./elements/CommentFrom";
import EmptyComments from "../Empty/EmptyComments";
import CastLoading from "./elements/CastLoading";
import CommentLoading from "./elements/CommentLoading";
import SimilarContentLoading from "./elements/SliderLoading";

function SerieDetail({
  loading,
  typeHandler,
  onStatusChange,
  newCommentMessage,
  newCommentSpoil,
  onSmash,
  totalComments,
  similarContent,
  overview,
  duration,
  releaseYear,
  rating,
  director,
  trailer,
  genres,
  cast,
  seasons,
  screenshots,
}) {
  // const [totalSeason] = useState(seasons);
  // const [currentSeason, setCurrentSeason] = useState(totalSeason[0]);
  // const [activeSeason, setActiveSeason] = useState("Season 1");

  const id = useId();
  const changeCurrentSeason = (value) => {
    const newSeason = totalSeason.find((item) => item.title === value);
    if (newSeason) {
      setCurrentSeason({ ...newSeason });
      setActiveSeason(value);
    }
  };
  return (
    <main className="animate-fadeIn mt-8 max-lg:mt-10 max-md:mt-20 max-sm:mt-25">
      <Section>
        <div className="grid grid-cols-12 gap-4">
          <div className="max-lg:order-2 col-span-12 lg:col-span-8 xl:col-span-9">
            <div className="w-full">
              <Content value={"Overview"}>
                {loading ? (
                  <div className="mt-2">
                    <div className="w-full h-5 bg-gray-900 animate-pulse rounded-xl"></div>
                    <div className="mt-2 w-full h-5 bg-gray-900 animate-pulse rounded-xl"></div>
                    <div className="mt-2 w-full h-5 bg-gray-900 animate-pulse rounded-xl"></div>
                    <div className="mt-2 w-full h-5 bg-gray-900 animate-pulse rounded-xl"></div>
                  </div>
                ) : (
                  <p className="mt-2 text-text-secondary page-overview">
                    {overview}
                  </p>
                )}
              </Content>
            </div>

            <div className="mt-5 w-full">
              {loading ? (
                <CastLoading />
              ) : (
                <Content value={"Cast"}>
                  <Cast cast={cast} />
                </Content>
              )}
            </div>
          </div>

          <QuickInfo
            releaseYear={releaseYear}
            duration={duration}
            genres={genres}
            rating={rating}
            director={director}
          />
        </div>
      </Section>

      {/* <!-- Trailer and screenshots --> */}
      <Section>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Trailer trailer={trailer} />
          <div className="col-span-1 max-lg:col-span-2">
            <Content value={"Scrreenshots"}>
              <div className="mt-2 grid grid-cols-2 gap-2 w-full">
                {loading
                  ? Array.from({ length: 4 }).map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="rounded-xl col-span-1 aspect-video w-full h-full bg-gray-900 animate-pulse"
                        ></div>
                      );
                    })
                  : screenshots.map((item, index) => (
                      <ScreenShot key={index} imgUrl={item} />
                    ))}
              </div>
            </Content>
          </div>
        </div>
      </Section>

      {/* <!-- Seasons and Episodes --> */}
      {/* <Section>
        <Content value={"Seasons"}>
          <Season
            activeSeason={activeSeason}
            onSmash={changeCurrentSeason}
            seasons={totalSeason}
          />
        </Content>

        <div className="mt-5">
          <Content value={"Episodes"}>
            <Episodes currentSeason={currentSeason} />
          </Content>
        </div>
      </Section> */}

      {/* <!-- Similar Series --> */}
      <Section>
        <Content value={"Similar Movies"}>
          <div className="overflow-hidden mt-2">
            {loading ? (
              <SimilarContentLoading />
            ) : (
              <Slider data={similarContent} />
            )}
          </div>
        </Content>
      </Section>

      {/* <!-- Comments --> */}
      <Section needMB={true}>
        <Content value={"Comments"} nested={true} child={"(0)"}>
          <div className="mt-3">
            <CommentFrom
              onStatusChange={onStatusChange}
              onType={typeHandler}
              newCommentMessage={newCommentMessage}
              newCommentSpoil={newCommentSpoil}
            />
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => {
                return <CommentLoading key={index} />;
              })
            ) : totalComments.length === 0 ? (
              <EmptyComments />
            ) : (
              totalComments.map((item, index) => {
                return <Comment key={index} {...item} />;
              })
            )}
          </div>
        </Content>
      </Section>
    </main>
  );
}

export default SerieDetail;
