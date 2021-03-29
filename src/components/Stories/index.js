import React from "react";
import {
  Container,
  List,
  Story,
  SettingsList,
  SearchBox,
  Icons,
} from "./styles/stories";
import LazyLoad from "react-lazyload";

export default function Stories({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Stories.List = function StoriesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Stories.Story = function StoriesStory({ src, children, ...restProps }) {
  return (
    <Story {...restProps}>
      <img src={src} alt="Story Display" />
      <p>{children}</p>
    </Story>
  );
};

Stories.SettingsList = function StoriesSettingsList({
  children,
  ...restProps
}) {
  return <SettingsList {...restProps}>{children}</SettingsList>;
};

Stories.SearchBox = function StoriesSearchBox({ children, ...restProps }) {
  return (
    <SearchBox {...restProps}>
      <button>
        <i class="fas fa-search"></i>
      </button>
      <input type="text" placeholder="Search" />
    </SearchBox>
  );
};

Stories.Icons = function StoriesIcons({
  themeToggler,
  children,
  ...restProps
}) {
  return (
    <Icons {...restProps}>
      <button>
        <i class="far fa-bell"></i>
      </button>
      <button>
        <i class="fas fa-cog"></i>
      </button>
      <button onClick={themeToggler}>
        <i class="far fa-moon"></i>
      </button>
    </Icons>
  );
};
