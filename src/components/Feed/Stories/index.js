import React from 'react';
import { Container, Text } from './styles/stories';

export default function Stories({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Stories.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}