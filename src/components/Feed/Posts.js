import React from 'react';
import { Post } from './Post';
import Styles from './Posts.module.scss';


export const Posts = ({ posts, user }) => {
    return (
        <div className={Styles.Posts} >
            {
                posts.map(({id, post}) => (
                    <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} likes={post.likes} comments={post.comments} usernamepic={user.photoURL} />
                ))
            }
        </div>
    )
}
