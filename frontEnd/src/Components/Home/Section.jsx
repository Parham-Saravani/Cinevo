import { FaArrowRight } from "react-icons/fa6";
import Slider from "../Slider/Slider";
import SliderLoading from "../Detail/elements/SliderLoading";

function Section({ children, data, icon }) {
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center text-text-primary font-bold text-2xl max-md:text-xl max-sm:text-lg">
            {icon}
            {children}
          </h2>
          <button
            className="text-text-secondary text-xs flex items-center hover:text-text-primary transition-colors duration-300 cursor-pointer"
            href="#"
          >
            View All
            <FaArrowRight className="ml-1.5 size-4 fill-text-secondary" />
          </button>
        </div>
        <div className="mt-4 overflow-hidden">
          {data ? <Slider data={data} /> : <SliderLoading />}
        </div>
      </div>
    </section>
  );
}

export default Section;
