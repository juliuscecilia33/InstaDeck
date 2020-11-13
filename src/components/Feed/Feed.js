import React from 'react';
import Styles from './Feed.module.scss';
import { Posts } from './Posts';
import { Stories } from './Stories';
import { ImageUpload } from './ImageUpload';


export const Feed = ({ posts, user }) => {
    console.log(posts);
    console.log(user);

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
                        <h3>Popular</h3>
                    </div>
                </div>

                
                <ImageUpload />
            </div>
        </>
    )
}
