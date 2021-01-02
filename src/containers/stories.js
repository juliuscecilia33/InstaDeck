import React from 'react';
import { Stories } from '../components';
import Soto from '../components/images/juansotolol.jpg';

export function StoriesContainer() {
    return (
        <Stories>
            <Stories.List>
                <Stories.Story src={Soto}>juansoto</Stories.Story>
                <Stories.Story src={Soto}>dabinmusic</Stories.Story>
                <Stories.Story src={Soto}>fairlanemusic</Stories.Story>
                <Stories.Story src={Soto}>jarredkelenic</Stories.Story>
                <Stories.Story src={Soto}>nurkomusic</Stories.Story>
                <Stories.Story src={Soto}>illeniummusic</Stories.Story>
            </Stories.List>

            <Stories.SettingsList>
                <Stories.SearchBox />
                <Stories.Icons />
            </Stories.SettingsList>
        </Stories>
    )
}