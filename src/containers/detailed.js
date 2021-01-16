import React, { useContext } from "react";
import { DetailedAccountContainer, DetailedPostContainer } from "../containers";
import { DetailedContext } from "../context/detailed";
import { ProfileContext } from "../context/profile";
import { Detailed } from "../components";

export function DetailedContainer({ user }) {
  const { detail } = useContext(DetailedContext);
  const { profile, profileData, profileText } = useContext(ProfileContext);

  return (
    <>
      <Detailed>
        {detail ? (
          <DetailedPostContainer />
        ) : profile ? (
          <h3>
            {profileData} <br /> {profileText}
          </h3>
        ) : (
          <DetailedAccountContainer user={user} />
        )}
      </Detailed>
    </>
  );
}
