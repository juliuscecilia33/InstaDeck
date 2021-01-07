import React from "react";
import {
  SideBarContainer,
  DetailedContainer,
  FeedContainer,
} from "../containers";
import Styles from "./MainPage.module.scss";

export default function MainPage({ posts, user }) {
  return (
    <div className={Styles.MainPage}>
      <SideBarContainer user={user} />
      <FeedContainer posts={posts} user={user} />
      <DetailedContainer user={user} />
    </div>
  );
}
