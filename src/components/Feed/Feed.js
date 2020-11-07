import React from 'react';
import { FeedBg } from './Feed.module.scss';
import { Post } from './Post';

export const Feed = ({ posts, user }) => {
    console.log(posts);
    console.log(user);

    return (
        <>
            <div className={FeedBg}>
                {
                    posts.map(({id, post}) => (
                        <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                    ))
                }
            </div>
        </>
    )
}
