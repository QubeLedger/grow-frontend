import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";
import React from "react";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const LinkText = (Link)
const LinkBLock = styled(LinkText) <{TextColor: string}>`
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
    padding-left: 20px;
    color: ${props => props.TextColor};
`

interface Props {
    to: string;
    children: ReactNode;
}

export const BorrowCustomLink = ({children, to}: Props) => {

    const match = useMatch(to)

    const [theme, setTheme] = useToggleTheme()

    return(
        <LinkBLock 
        to={to}
        style={{
            color: match ? theme.active == true ? '#C0C0C0' : '#333' :  theme.active == true ? '#666' : '#C0C0C0',
            transition: '.2s ease-in-out'
        }}
        TextColor={theme.TextColor}
        >
            {children}
        </LinkBLock>
    )
}