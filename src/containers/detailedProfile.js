import React, { useContext } from "react";
import { Detailed } from "../components";
import { ProfileContext } from "../context/profile";

export function DetailedProfileContainer() {
  const { profileData, profileText } = useContext(ProfileContext);

  return (
    <>
      <Detailed.Container>
        <h3>{profileData}</h3>
        <h3>{profileText}</h3>
      </Detailed.Container>
    </>
  );
}
