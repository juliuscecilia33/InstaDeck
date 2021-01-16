import React from "react";
import {
  SideBarContainer,
  DetailedContainer,
  FeedContainer,
} from "../containers";
import { Main } from "../components";

export default function MainPage({ posts, user }) {
  return (
    <Main>
      <SideBarContainer user={user} />
      <FeedContainer posts={posts} user={user} />
      <DetailedContainer user={user} posts={posts} />
    </Main>
  );
}
