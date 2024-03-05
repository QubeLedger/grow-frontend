import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    width: 100%;
    text-decoration: none;
    font-weight: 700;
    outline: none;
    font-size: 15px;
    margin-left: 60px;
    @media (max-width: 930px) {
        font-size: 17px;
    }
    @media (max-width: 730px) {
        font-size: 15px;
    }
    @media (max-width: 950px) {
        margin-left: 25px;
    }
`

interface Props {
    to: string;
    children: ReactNode;
}

export const HomePageLinkButton = ({children, to}: Props) => {

    const [theme, setTheme] = useToggleTheme()

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: match ? theme.active == true ? '#C0C0C0' : '#333' :  theme.active == true ? '#666' : '#C0C0C0',
            transition: '.2s ease-in-out',
            width: '100%'
        }}
        >
            {children}
        </LinkBLock>
    )
}