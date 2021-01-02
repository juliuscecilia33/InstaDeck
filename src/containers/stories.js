import React from 'react';
import { Stories } from '../components';

export function StoriesContainer() {
    return (
        <Stories>
            <Stories.List>
                <Stories.Story src="juansotolol">juansoto</Stories.Story>
                <Stories.Story src="dabin">dabinmusic</Stories.Story>
                <Stories.Story src="fairlane1">fairlanemusic</Stories.Story>
                <Stories.Story src="jkellenic">jarredkelenic</Stories.Story>
                <Stories.Story src="nurko">nurkomusic</Stories.Story>
                <Stories.Story src="illenium">illeniummusic</Stories.Story>
            </Stories.List>

            <Stories.SettingsList>
                <Stories.SearchBox />
                <Stories.Icons />
            </Stories.SettingsList>
        </Stories>
    )
}