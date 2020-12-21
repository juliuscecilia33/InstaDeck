import React from 'react';
import { Detailed, Feed, SideBar } from '../components';
import Styles from './MainPage.module.scss';

export const MainPage = ({ posts, user, popPosts }) => {
    return (
        <div className={Styles.MainPage}>
            <SideBar user={user} />
            <Feed posts={posts} user={user} popPosts={popPosts} />
            <Detailed user={user} posts={posts} />
        </div>
    )
}
