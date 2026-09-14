import React from "react";
import Section from "../Section";
import Content from "../Content";

function SeasonLoading() {
  return (
    <Section>
      <Content value={"Seasons"}>
        <div className="flex mt-2">
          {Array.from({ length: 4 }).map((item, index) => {
            return (
              <button key={index} className="w-25 h-10 bg-gray-900 animate-pulse rounded-xl mr-2"></button>
            );
          })}
        </div>
      </Content>

      <div className="mt-5">
        <Content value={"Episodes"}>
          <div className="mt-3 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2">
            {Array.from({ length: 5 }).map((item, index) => {
              return (
                <div key={index} className="col-span-1 flex justify-between items-center w-full rounded-xl px-3 py-3 bg-gray-900 animate-pulse">
                  <div className="text-xs">
                    <div className="w-25 rounded-md h-3 text-text-primary line-clamp-1 mr-4 bg-input-border/50 animate-pulse"></div>
                    <div className="h-3 w-20 rounded-md mt-1 text-text-secondary/70 bg-input-border/50 animate-pulse"></div>
                  </div>
                  <span className="bg-input-border/50 rounded-full px-3 py-3 inline-flex"></span>
                </div>
              );
            })}
          </div>
        </Content>
      </div>
    </Section>
  );
}

export default SeasonLoading;
