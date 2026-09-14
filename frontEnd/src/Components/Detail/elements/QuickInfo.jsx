import TimeFormatter from "../../../Utilities/TimeFormatter/TimeFormatter";
import InfoItem from "./InfoItem";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";
import { LuClapperboard } from "react-icons/lu";
import { FaStar, FaPlay } from "react-icons/fa6";
import InfoItemLoading from "./InfoItemLoading";

function QuickInfo({
  loading,
  releaseYear,
  duration,
  genres,
  rating,
  director,
}) {
  return (
    <div className="max-h-67 max-lg:order-1 col-span-12 flex flex-col lg:col-span-4 xl:col-span-3 bg-linear-to-br from-cta-primary/5 via-transparent to-cta-primary/5 relative border border-white/20 backdrop-blur-2xl rounded-xl px-5 py-6 mt-4">
      <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
        Quick Info
      </h2>
      <div className="mt-2 text-[12px] max-lg:text-sm max-sm:text-xs">
        {loading ? (
          <InfoItemLoading
            icon={<FaCalendar className="text-cta-primary size-5" />}
          >
            Release Date
          </InfoItemLoading>
        ) : releaseYear ? (
          <InfoItem
            icon={<FaCalendar className="text-cta-primary size-5" />}
            value={releaseYear}
          >
            Release Date
          </InfoItem>
        ) : (
          <InfoItem
            icon={<FaCalendar className="text-cta-primary size-5" />}
            value={"NA"}
          >
            Release Date
          </InfoItem>
        )}

        {loading ? (
          <InfoItemLoading
            icon={<FaClock className="text-cta-primary size-5" />}
          >
            Duration
          </InfoItemLoading>
        ) : duration ? (
          <InfoItem
            icon={<FaClock className="text-cta-primary size-5" />}
            value={TimeFormatter(duration)}
          >
            Duration
          </InfoItem>
        ) : (
          <InfoItem
            icon={<FaClock className="text-cta-primary size-5" />}
            value={"NA"}
          >
            Duration
          </InfoItem>
        )}

        {loading ? (
          <InfoItemLoading
            icon={<LuClapperboard className="text-cta-primary size-5" />}
          >
            Genres
          </InfoItemLoading>
        ) : genres.lenght !== 0 ? (
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
          <InfoItem
            icon={<LuClapperboard className="text-cta-primary size-5" />}
            value={"NA"}
          >
            Genres
          </InfoItem>
        )}

        {loading ? (
          <InfoItemLoading
            icon={<FaStar className="text-cta-primary size-5" />}
          >
            Rating
          </InfoItemLoading>
        ) : rating ? (
          <InfoItem
            icon={<FaStar className="text-cta-primary size-5" />}
            value={`${rating}/10`}
          >
            Rating
          </InfoItem>
        ) : (
          <InfoItem
            icon={<FaStar className="text-cta-primary size-5" />}
            value={"NA"}
          >
            Rating
          </InfoItem>
        )}

        {loading ? (
          <InfoItemLoading
            icon={<FaUser className="text-cta-primary size-5" />}
          >
            Director
          </InfoItemLoading>
        ) : director ? (
          <InfoItem
            icon={<FaUser className="text-cta-primary size-5" />}
            value={director}
          >
            Director
          </InfoItem>
        ) : (
          <InfoItem
            icon={<FaUser className="text-cta-primary size-5" />}
            value={"NA"}
          >
            Director
          </InfoItem>
        )}
      </div>
    </div>
  );
}

export default QuickInfo;
