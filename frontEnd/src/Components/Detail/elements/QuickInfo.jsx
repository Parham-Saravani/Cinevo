import TimeFormatter from "../../../Utilities/TimeFormatter/TimeFormatter";
import InfoItem from "./infoItem";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";
import { LuClapperboard } from "react-icons/lu";
import { FaStar, FaPlay } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import InfoItemLoading from "./InfoItemLoading";

function QuickInfo({ releaseYear, duration, genres, rating, director }) {
  return (
    <div className="max-lg:order-1 col-span-12 flex flex-col lg:col-span-4 xl:col-span-3 bg-linear-to-br from-cta-primary/5 via-transparent to-cta-primary/5 relative border border-white/20 backdrop-blur-2xl rounded-xl px-5 py-6 mt-4">
      <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
        Quick Info
      </h2>
      <div className="mt-2 text-[12px] max-lg:text-sm max-sm:text-xs">
        {releaseYear ? (
          <InfoItem
            icon={<FaCalendar className="text-cta-primary size-5" />}
            value={releaseYear}
          >
            Release Date
          </InfoItem>
        ) : (
          <InfoItemLoading
            icon={<FaCalendar className="text-cta-primary size-5" />}
          >
            Release Date
          </InfoItemLoading>
        )}

        {duration ? (
          <InfoItem
            icon={<FaClock className="text-cta-primary size-5" />}
            value={TimeFormatter(duration)}
          >
            Duration
          </InfoItem>
        ) : (
          <InfoItemLoading
            icon={<FaClock className="text-cta-primary size-5" />}
          >
            Duration
          </InfoItemLoading>
        )}
        {genres ? (
          <InfoItem
            icon={<LuClapperboard className="text-cta-primary size-5" />}
            value={genres.slice(0, 2).map((item, index) => (
              <span
                key={index}
                className="relative mr-2.5 before:absolute before:-right-1.5 before:content-[','] last:before:content-none"
              >
                {item}
              </span>
            ))}
          >
            Genres
          </InfoItem>
        ) : (
          <InfoItemLoading
            icon={<LuClapperboard className="text-cta-primary size-5" />}
          >
            Genres
          </InfoItemLoading>
        )}
        {rating ? (
          <InfoItem
            icon={<FaStar className="text-cta-primary size-5" />}
            value={`${rating}/10`}
          >
            Rating
          </InfoItem>
        ) : (
          <InfoItemLoading
            icon={<FaStar className="text-cta-primary size-5" />}
          >
            Rating
          </InfoItemLoading>
        )}

        {director ? (
          <InfoItem
            icon={<FaUser className="text-cta-primary size-5" />}
            value={director}
          >
            Director
          </InfoItem>
        ) : (
          <InfoItemLoading
            icon={<FaUser className="text-cta-primary size-5" />}
          >
            Director
          </InfoItemLoading>
        )}
      </div>
    </div>
  );
}

export default QuickInfo;
