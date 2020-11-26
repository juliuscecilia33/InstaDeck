import React from 'react';
import { Post } from './Post';
import Styles from './PopularPosts.module.scss';


export const PopularPosts = ({ popPosts, user }) => {
    

    return (
        <div className={Styles.PopularPosts} >
            {
                popPosts.map(({id, post}) => (
                    <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} likes={post.likes} comments={post.comments} usernamepic={post.usernamepic} />
                ))
            }
        </div>
    )
}
