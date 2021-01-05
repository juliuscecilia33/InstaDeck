import React from 'react';
import { Feed } from '../components';
import { SideBarContainer, DetailedContainer } from '../containers';
import Styles from './MainPage.module.scss';

export default function MainPage({ posts, user, popPosts }) {
  return (
    <div className={Styles.MainPage}>
      <SideBarContainer user={user} />
      <Feed posts={posts} user={user} popPosts={popPosts} />
      <DetailedContainer user={user} />
    </div>
  );
}
