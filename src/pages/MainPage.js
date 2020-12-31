import React from 'react';
import { Detailed, Feed } from '../components';
import { SideBarContainer } from '../containers';
import Styles from './MainPage.module.scss';

export default function MainPage({ posts, user, popPosts }) {
    return (
        <div className={Styles.MainPage}>
            <SideBarContainer user={user} />
            <Feed posts={posts} user={user} popPosts={popPosts} />
            <Detailed user={user} posts={posts} />
        </div>
    )
}
