import React from 'react';
import { Detailed } from '../components/Detailed/Detailed';
import { Feed } from '../components/Feed/Feed';
import { SideBar } from '../components/Sidebar/SideBar';
import Styles from './MainPage.module.scss';

export const MainPage = ({ posts, user, popPosts }) => {
    return (
        <div className={Styles.MainPage}>
            <SideBar />
            <Feed posts={posts} user={user} popPosts={popPosts} />
            <Detailed />
        </div>
    )
}
