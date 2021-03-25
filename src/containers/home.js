import React from "react";
import { Home } from "../components";
import AnalyticsDark from "../components/images/AnalyticsDark.jpg";
import DetailedDark from "../components/images/DetailedDark.jpg";
import Page1 from "../components/images/Page1.jpg";
import Page2DarkMode from "../components/images/Page2DarkMode.jpg";

export function HomeContainer() {
  return (
    <Home>
      <Home.Overlay />
      <Home.Header>
        <Home.Logo />
        <Home.Buttons>
          <Home.OutlinedButton>Log in</Home.OutlinedButton>
          <Home.FillButton width="156px" height="44px">
            Sign up
          </Home.FillButton>
        </Home.Buttons>
      </Home.Header>
      <Home.MainSect>
        <Home.TextSect>
          <Home.TextSub>
            <Home.Title>Your Instagram.</Home.Title>
            <Home.Subtitle>Enhanced.</Home.Subtitle>
            <Home.Subtitle>Organized.</Home.Subtitle>
            <Home.Description>
              A semi-dashboard interface of Instagram, which allows you to have{" "}
              <span>
                personalized feeds, account analytics, built-in dark mode,
                account roles, posting,
              </span>{" "}
              and more.
            </Home.Description>
            <Home.FillButton width="366px" height="71px">
              Sign Up - You'll <i class="fas fa-heartbeat"></i> it.
            </Home.FillButton>
            <Home.Message />
          </Home.TextSub>
          <Home.QuoteSect>
            <Home.Quote>
              “InstaDeck brings Instagram into a whole new level for the
              computer version with all its features and implementations"
            </Home.Quote>
            <Home.ProfilePic />
          </Home.QuoteSect>
        </Home.TextSect>
        <Home.DisplaySect>
          <Home.Image src={AnalyticsDark} />
          <Home.Image src={Page1} />
          <Home.Image src={DetailedDark} />
          <Home.Image src={Page2DarkMode} />
        </Home.DisplaySect>
      </Home.MainSect>
    </Home>
  );
}
