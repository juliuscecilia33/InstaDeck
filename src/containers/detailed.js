import React, { useContext } from "react";
import {
  DetailedAccountContainer,
  DetailedPostContainer,
  DetailedProfileContainer,
} from "../containers";
import { DetailedContext } from "../context/detailed";
import { ProfileContext } from "../context/profile";
import { Detailed } from "../components";

export function DetailedContainer({ user, posts }) {
  const { detail } = useContext(DetailedContext);
  const { profile } = useContext(ProfileContext);

  return (
    <>
      <Detailed>
        {detail ? (
          <DetailedPostContainer />
        ) : profile ? (
          <DetailedProfileContainer posts={posts} />
        ) : (
          <DetailedAccountContainer user={user} posts={posts} />
        )}
      </Detailed>
    </>
  );
}
