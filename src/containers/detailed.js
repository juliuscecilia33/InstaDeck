import React, { useContext } from "react";
import { DetailedAccountContainer, DetailedPostContainer } from "../containers";
import { DetailedContext } from "../context/detailed";
import { ProfileContext } from "../context/profile";
import { Detailed } from "../components";

export function DetailedContainer({ user }) {
  const { detail } = useContext(DetailedContext);
  const { profile, profileData } = useContext(ProfileContext);

  return (
    <>
      <Detailed>
        {detail ? (
          <DetailedPostContainer />
        ) : profile ? (
          <h3>{profileData}</h3>
        ) : (
          <DetailedAccountContainer user={user} />
        )}
      </Detailed>
    </>
  );
}
