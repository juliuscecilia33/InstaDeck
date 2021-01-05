import React, { useContext } from "react";
import { DetailedAccountContainer, DetailedPostContainer } from "../containers";
import { DetailedContext } from "../context/detailed";
import { Detailed } from "../components";

export function DetailedContainer({ user }) {
  const { detail } = useContext(DetailedContext);

  return (
    <>
      <Detailed>
        {detail ? (
          <DetailedPostContainer />
        ) : (
          <DetailedAccountContainer user={user} />
        )}
      </Detailed>
    </>
  );
}
