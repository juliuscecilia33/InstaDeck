import React from 'react';
import { Post } from './Post';
import Styles from './PopularPosts.module.scss';


export const PopularPosts = ({ posts, user }) => {
    

    return (
        <div className={Styles.PopularPosts} >
            {
                posts.map(({id, post}) => {
                    return post.likes >= 10 &&
                        <Post 
                            key={id} 
                            postId={id} 
                            user={user} 
                            username={post.username} 
                            caption={post.caption} 
                            imageUrl={post.imageUrl} 
                            likes={post.likes} 
                            comments={post.comments} 
                            usernamepic={post.usernamepic}   
                        />
                })
            }
        </div>
    )
}
