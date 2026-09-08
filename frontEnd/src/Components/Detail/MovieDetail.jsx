import { FaUser } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import QuickInfo from "./elements/QuickInfo";
import Cast from "./elements/Cast";
import Trailer from "./elements/Trailer";
import Slider from "../Slider/Slider";
import ScreenShot from "./elements/ScreenShot";
import Comment from "../Comment/Comment";
import Section from "./Section";
import Content from "./Content";

function MovieDetail({
  similarContent,
  overview,
  duration,
  releaseYear,
  rating,
  director,
  trailer,
  genres,
  cast,
  screenshots,
}) {
  return (
    <main className="animate-fadeIn mt-8 max-lg:mt-15 max-md:mt-20 max-sm:mt-25">
      <Section>
        <div className="grid grid-cols-12 gap-4">
          <div className="max-lg:order-2 col-span-12 lg:col-span-8 xl:col-span-9">
            <div className="w-full">
              <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
                Overview
              </h2>
              <p className="mt-2 text-text-secondary page-overview">
                {overview}
              </p>
            </div>

            <div className="mt-5 w-full">
              <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
                Cast
              </h2>
              <Cast cast={cast} />
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
                {screenshots.map((item, index) => (
                  <ScreenShot key={index} imgUrl={item} />
                ))}
              </div>
            </Content>
            
          </div>
        </div>
      </Section>

      {/* <!-- Similar Series --> */}
      <Section>
        <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
          Similar Movies
        </h2>
        <div className="overflow-hidden mt-2">
          <Slider data={similarContent} />
        </div>
      </Section>

      {/* <!-- Comments --> */}
      <Section needMB={true}>
        <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
          Comments{" "}
          <span className="text-text-secondary text-sm total-comments">
            (125)
          </span>
        </h2>
        <div className="mt-3">
          <div className="bg-linear-to-br from-cta-primary/10 via-transparent to-cta-primary/10 px-3 py-4 border border-white/10 rounded-xl">
            <form className="grid grid-cols-3 max-lg:grid-cols-5 max-md:grid-cols-3 gap-4 text-sm max-lg:text-xs max-md:text-sm">
              <div className="col-span-1 max-lg:col-span-2 max-md:col-span-3 -mt-2 grid grid-cols-1">
                <div className="col-span-1 mt-2 flex items-center bg-input-bg/50 text-text-secondary border-2 border-input-border/50 rounded-xl px-3 py-3">
                  <FaUser className="fill-current size-5" />

                  <input
                    className="w-full ml-3 outline-hidden comments-user-username"
                    value="Parham"
                    type="text"
                    readOnly
                  />
                </div>
                <div className="col-span-1 mt-2 flex items-center bg-input-bg/50 text-text-secondary border-2 border-input-border/50 rounded-xl px-3 py-3">
                  <MdOutlineEmail className="size-6 fill-current" />
                  <input
                    className="w-full ml-3 outline-hidden comments-user-email"
                    value="parhamsaravani83@gmail.com"
                    type="text"
                    readOnly
                  />
                </div>
                <div className="col-span-1 mt-2 flex items-center justify-between bg-input-bg/50 text-text-secondary border-2 border-input-border/50 rounded-xl px-3 py-3">
                  <p>Spoil</p>
                  <label
                    htmlFor="spoil-checkbox"
                    className="bg-bg-primary w-10 h-5 rounded-full cursor-pointer relative transition-colors duration-300 before:absolute before:transition-normal before:duration-300 before:left-1  before:top-0 before:bottom-0 before:my-auto before:w-4 before:h-4 before:rounded-full before:bg-input-border spoil-label"
                  >
                    <input
                      id="spoil-checkbox"
                      className="w-full"
                      type="checkbox"
                      hidden
                    />
                  </label>
                </div>
              </div>

              <div className="col-span-2 max-lg:col-span-3 max-md:col-span-3 h-50 relative text-text-secondary hover:border-input-border-hover focus-within:border-input-border-focus focus-within:shadow-[0_0_20px_rgba(139,92,246,.2)] transition-normal duration-300  bg-input-bg/50 px-3 py-3 rounded-xl border-2 border-input-border/50">
                <textarea
                  className="w-full h-full outline-hidden resize-none placeholder:text-text-secondary custom-scroll comment-input"
                  placeholder="Share your thoughts about this series..."
                ></textarea>
                <button className="absolute right-7 bottom-2 bg-cta-primary hover:bg-cta-hover cursor-pointer rounded-xl text-text-primary transition-colors duration-300 w-30 h-10 submit-comment">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10 comments-container">
            <Comment />
            <Comment />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default MovieDetail;
