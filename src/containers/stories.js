import React from "react";
import { Stories } from "../components";
import Soto from "../components/images/juansotolol.jpg";
import Dabin from "../components/images/dabin.jpg";
import Fairlane from "../components/images/fairlane1.jpg";
import Kellenic from "../components/images/jkellenic.jpg";
import Nurko from "../components/images/nurko.jpg";
import Illenium from "../components/images/illenium.jpg";

export function StoriesContainer({ themeToggler }) {
  return (
    <Stories>
      <Stories.List>
        <Stories.Story src={Soto}>juansoto</Stories.Story>
        <Stories.Story src={Dabin}>dabinmusic</Stories.Story>
        <Stories.Story src={Fairlane}>fairlanemusic</Stories.Story>
        <Stories.Story src={Kellenic}>jarredkelenic</Stories.Story>
        <Stories.Story src={Nurko}>nurkomusic</Stories.Story>
        <Stories.Story src={Illenium}>illeniummusic</Stories.Story>
      </Stories.List>

      <Stories.SettingsList>
        <Stories.SearchBox />
        <Stories.Icons themeToggler={themeToggler} />
      </Stories.SettingsList>
    </Stories>
  );
}
