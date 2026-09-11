import { IoIosArrowDown } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { RiRestartLine } from "react-icons/ri";

function ContentFilters({
  changeLayout,
  years,
  types,
  genres,
  layout,
  isGenre = false,
}) {
  
  if (isGenre) {
    return (
      <div className="mt-7 text-sm max-sm:text-xs text-text-secondary/50 bg-linear-to-br from-cta-primary/10 via-transparent to-cta-primary/10 px-3 py-4 border border-white/10 rounded-xl">
        <div className="grid grid-cols-5 max-xl:grid-cols-1 gap-3 text-xs">
          <div className="col-span-4 max-xl:col-span-1 max-md:grid-cols-1 grid grid-cols-4 gap-3">
            <div className="col-span-2 max-md:col-span-1">
              <input
                className="w-full text-text-secondary h-full rounded-xl bg-input-bg/50 border-2 border-input-border/50 outline-hidden px-2 py-3 placeholder:text-text-secondary/50 transition-colors duration-300 hover:border-input-border-hover focus:border-input-border-focus/50"
                placeholder="Search movie..."
                type="text"
              />
            </div>
            <div className="col-span-2 max-md:col-span-1 grid grid-cols-2 gap-3">
              <div className="group col-span-1 relative">
                <button className="flex items-center justify-between px-2.5 py-3 bg-input-bg/50 border-2 border-input-border/50 w-full h-full rounded-xl cursor-pointer open-sort-btn">
                  <span>All years</span>
                  <IoIosArrowDown className="size-4.5 fill-current" />
                </button>
                <ul className="hidden group-focus-within:block absolute mt-1 w-full max-h-80 overflow-auto z-50 bg-input-bg  rounded-xl border border-input-border custom-scroll flex-col gap-1 px-2 py-2 sort-menu series-genres-container">
                  <li
                    className="max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item active-sort"
                    data-content="All genres"
                  >
                    All years
                  </li>
                  {years.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mt-1.5 max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="group col-span-1 relative">
                <button className="flex items-center justify-between px-2.5  bg-input-bg/50 border-2 border-input-border/50 w-full h-full rounded-xl cursor-pointer open-sort-btn">
                  <span>All types</span>
                  <IoIosArrowDown className="size-4.5 fill-current" />
                </button>
                <ul className="hidden group-focus-within:block absolute mt-1 w-full max-h-80 overflow-auto z-50 bg-input-bg  rounded-xl border border-input-border custom-scroll flex-col gap-1 px-2 py-2 sort-menu series-years-container">
                  <li
                    className="max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item active-sort"
                    data-content="All years"
                  >
                    All types
                  </li>
                  {types.map((item, index) => {
                    return (
                      <li
                        data-type={item}
                        key={index}
                        className="mt-1.5 max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item"
                      >
                        {item[0].toUpperCase() + item.slice(1)}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <div className="col-span-1 relative">
                <button className="flex items-center justify-between px-2.5  bg-input-bg/50 border-2 border-input-border/50 w-full h-full rounded-xl cursor-pointer open-sort-btn">
                  <span>Sort by: Popular</span>
                  <IoIosArrowDown className="size-4.5 fill-current" />
                </button>
                <ul className="hidden absolute mt-1 w-full max-h-80 overflow-auto z-50 bg-input-bg  rounded-xl border border-input-border custom-scroll flex-col gap-1 px-2 py-2 sort-menu series-years-container">
                  <li
                    className="max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item active-sort"
                    data-content="All"
                  >
                    All
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-span-1 flex max-xl:justify-between items-center justify-end">
            <div className="h-12.5 w-23 flex gap-2 items-center rounded-xl bg-input-bg/50 px-2 py-2 border border-input-border/50 mr-5 max-xl:mr-0">
              <button
                onClick={(event) =>
                  changeLayout(event.currentTarget.dataset.layout)
                }
                className={`flex items-center justify-center text-text-secondary hover:bg-text-secondary/20 transition-colors duration-300 h-full w-full rounded-xl cursor-pointer ${layout === "grid" ? "acitve-layout" : ""}`}
                data-layout="grid"
              >
                <LuLayoutGrid className="size-4.5 stroke-current" />
              </button>
              <button
                onClick={(event) =>
                  changeLayout(event.currentTarget.dataset.layout)
                }
                className={`flex items-center justify-center text-text-secondary hover:bg-text-secondary/20 transition-colors duration-300 h-full w-full rounded-xl cursor-pointer ${layout === "list" ? "acitve-layout" : ""}`}
                data-layout="list"
              >
                <CiBoxList className="size-4.5 stroke-current" />
              </button>
            </div>
            <span className="flex items-center text-xs hover:text-text-secondary/70 transition-colors duration-300 cursor-pointer clear-filters">
              Clear Filters
              <RiRestartLine className="size-4 ml-1 fill-current" />
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="animate-fadeIn">
      <div className="container mx-auto">
        <h3 className="font-bold text-3xl max-sm:text-2xl">Explore Movies</h3>
        <p className="mt-1 text-text-secondary text-sm max-sm:text-xs">
          Discover thousands of movies from every genre and decade.
        </p>
        <div className="mt-7 text-sm max-sm:text-xs text-text-secondary/50 bg-linear-to-br from-cta-primary/10 via-transparent to-cta-primary/10 px-3 py-4 border border-white/10 rounded-xl">
          <div className="grid grid-cols-5 max-xl:grid-cols-1 gap-3">
            <div className="col-span-4 max-xl:col-span-1 max-md:grid-cols-1 grid grid-cols-4 gap-3">
              <div className="col-span-2 max-md:col-span-1">
                <input
                  className="w-full text-text-secondary h-full rounded-xl bg-input-bg/50 border-2 border-input-border/50 outline-hidden px-2 py-3 placeholder:text-text-secondary/50 transition-colors duration-300 hover:border-input-border-hover focus:border-input-border-focus/50"
                  placeholder="Search movie..."
                  type="text"
                />
              </div>
              <div className="col-span-2 max-md:col-span-1 grid grid-cols-2 gap-3">
                <div className="group col-span-1 relative">
                  <button className="flex items-center justify-between px-2.5 py-3 bg-input-bg/50 border-2 border-input-border/50 w-full h-full rounded-xl cursor-pointer open-sort-btn">
                    <span>All genres</span>
                    <IoIosArrowDown className="size-4.5 fill-current" />
                  </button>
                  <ul className="hidden group-focus-within:block absolute mt-1 w-full h-fit max-h-80 overflow-auto z-50 bg-input-bg rounded-xl border border-input-border custom-scroll flex-col gap-1 px-2 py-2 sort-menu movies-genres-container">
                    <li className="first:mt-0 mt-1.5 max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item active-sort">
                      All genres
                    </li>
                    {genres.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="mt-1.5 max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="group col-span-1 relative">
                  <button className="flex items-center justify-between px-2.5  bg-input-bg/50 border-2 border-input-border/50 w-full h-full rounded-xl cursor-pointer open-sort-btn">
                    <span>All years</span>
                    <IoIosArrowDown className="size-4.5 fill-current" />
                  </button>
                  <ul className="hidden group-focus-within:block absolute mt-1 w-full h-fit max-h-80 z-50 bg-input-bg  rounded-xl border border-input-border flex-col gap-1 px-2 py-2 sort-menu movies-years-container">
                    <li className="max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item active-sort">
                      All years
                    </li>
                    {years.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="mt-1.5 max-lg:text-xs py-2.5 px-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-input-border/50 hover:text-text-primary/50 sort-item"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex max-xl:justify-between items-center justify-end">
              <div className="h-12.5 w-23 flex gap-2 items-center rounded-xl bg-input-bg/50 px-2 py-2 border border-input-border/50 mr-15 max-xl:mr-0">
                <button
                  onClick={(event) =>
                    changeLayout(event.currentTarget.dataset.layout)
                  }
                  className={`flex items-center justify-center text-text-secondary hover:bg-text-secondary/20 transition-colors duration-300 h-full w-full rounded-xl cursor-pointer ${layout === "grid" ? "acitve-layout" : ""}`}
                  data-layout="grid"
                >
                  <LuLayoutGrid className="size-4.5 stroke-current" />
                </button>
                <button
                  onClick={(event) =>
                    changeLayout(event.currentTarget.dataset.layout)
                  }
                  className={`flex items-center justify-center text-text-secondary hover:bg-text-secondary/20 transition-colors duration-300 h-full w-full rounded-xl cursor-pointer ${layout === "list" ? "acitve-layout" : ""}`}
                  data-layout="list"
                >
                  <CiBoxList className="size-4.5 stroke-current" />
                </button>
              </div>
              <span className="flex items-center text-xs hover:text-text-secondary/70 transition-colors duration-300 cursor-pointer clear-filters">
                Clear Filters
                <RiRestartLine className="size-4 ml-1 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentFilters;
