import React, { useContext, useState, useEffect } from "react";
import { Detailed } from "../components";
import { db } from "../firebase";
import { DetailedContext } from "../context/detailed";
import { FirebaseContext } from "../context/firebase";
import firebase from "firebase";
import { mapTime } from "../mappers/mapTime";

export function DetailedPostContainer({ user }) {
  const { selectedDetail } = useContext(DetailedContext);
  const [detailedImage, setDetailedImage] = useState(null);
  const [detailedUser, setDetailedUser] = useState("");
  const [detailedUserPic, setDetailedUserPic] = useState(null);
  const [detailedCaption, setDetailedCaption] = useState("");
  const [detailedTime, setDetailedTime] = useState("");
  const [setError] = useState("");
  const { firebaseApp } = useContext(FirebaseContext);
  const firebaseUser = firebaseApp.auth().currentUser || {};
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (selectedDetail) {
      db.collection("posts")
        .doc(selectedDetail)
        .get()
        .then((doc) => {
          if (doc.exists) {
            let docData = doc.data();

            setDetailedImage(docData.imageUrl);
            setDetailedUser(docData.username);
            setDetailedUserPic(docData.usernamepic);
            setDetailedCaption(docData.caption);
            setDetailedTime(docData.timestamp);
          } else {
            setError("doc not found");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [selectedDetail, setError]);

  useEffect(() => {
    if (selectedDetail) {
      db.collection("posts")
        .doc(selectedDetail)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              comment: doc.data(),
            }))
          );
        });
    }
  }, [selectedDetail]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts")
      .doc(selectedDetail)
      .collection("comments")
      .add({
        text: comment,
        username: firebaseUser.displayName,
        timestamp: mapTime(firebase.firestore.FieldValue.serverTimestamp()),
      });

    setComment("");
  };

  const deleteComment = (selectedDetail, commentId) => {
    db.collection("posts")
      .doc(selectedDetail)
      .collection("comments")
      .doc(commentId)
      .delete()
      .then(function () {
        console.log("Comment successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <Detailed.Container>
      <Detailed.Image src={detailedImage} />

      <Detailed.Caption
        detailedCaption={detailedCaption}
        detailedTime={detailedTime}
      />

      <Detailed.Comments>
        {comments.map(({ id, comment }) => (
          <Detailed.Comment comment={comment}>
            {comment.username === user.displayName && (
              <button onClick={() => deleteComment(selectedDetail, id)}>
                <i class="fas fa-trash"></i>
              </button>
            )}
          </Detailed.Comment>
        ))}
      </Detailed.Comments>

      <Detailed.CommentBox
        comment={comment}
        setComment={setComment}
        postComment={postComment}
      />

      <Detailed.User src={detailedUserPic}>{detailedUser}</Detailed.User>
    </Detailed.Container>
  );
}
