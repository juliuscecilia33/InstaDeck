import React, { useContext } from "react";
import { DetailedAccountContainer, DetailedPostContainer } from "../containers";
import { DetailedContext } from "../context/detailed";
import { ProfileContext } from "../context/profile";
import { Detailed } from "../components";
import { adminControl } from "../firebase";

export function DetailedContainer({ user }) {
  const { detail } = useContext(DetailedContext);
  const { profile, profileData } = useContext(ProfileContext);

  adminControl
    .auth()
    .getUser(profileData)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });

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
