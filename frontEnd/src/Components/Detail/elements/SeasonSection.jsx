import SeasonSlider from "./SeasonSlider";
import Episodes from "./Episodes";
import { useState } from "react";
import Section from "../Section";
import Content from "../Content";

function SeasonSection({ seasons }) {
  const [totalSeason] = useState(seasons);
  const [currentSeason, setCurrentSeason] = useState(totalSeason[0]);
  const [activeSeason, setActiveSeason] = useState("Season 1");
  const changeCurrentSeason = (value) => {
    const newSeason = totalSeason.find((item) => item.title === value);
    if (newSeason) {
      setCurrentSeason({ ...newSeason });
      setActiveSeason(value);
    }
  };

  return (
    <Section>
      <Content value={"Seasons"}>
        <SeasonSlider
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
    </Section>
  );
}

export default SeasonSection;
