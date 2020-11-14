import React from 'react';
import Styles from './Feed.module.scss';
import { Posts } from './Posts';
import { Stories } from './Stories';
import { ImageUpload } from './ImageUpload';
import { PopularPosts } from './PopularPosts';


export const Feed = ({ posts, user, popPosts }) => {

    return (
        <>
            <div className={Styles.FeedBg}>
                <Stories />

                <div className={Styles.UserFeed}>
                    
                    <div className={Styles.FollowingFeed}>
                        <h1>Following</h1>

                        <Posts posts={posts} user={user} />
                    </div>

                    <div className={Styles.PopularFeed}>
                        <h1>Popular</h1>

                        <PopularPosts popPosts={popPosts} user={user} />
                    </div>
                </div>

                
                <ImageUpload />
            </div>
        </>
    )
}
