import React from "react";
import {
  SideBarContainer,
  DetailedContainer,
  FeedContainer,
} from "../containers";
import { Main } from "../components";

export default function MainPage({ themeToggler, posts, user }) {
  return (
    <Main>
      <SideBarContainer user={user} />
      <FeedContainer themeToggler={themeToggler} posts={posts} user={user} />
      <DetailedContainer user={user} posts={posts} />
    </Main>
  );
}
