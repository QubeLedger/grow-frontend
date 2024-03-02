import styled from "styled-components";
import { Customlink } from "../CustomLink/CustomLink";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";


const BlockLink = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;
    height: 60px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 145px;
`

const NavBlock = styled.div <{padding: string, navBlockBg: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.navBlockBg};
    padding-bottom: ${props => props.padding};
    transition: padding-bottom .3s ease-in-out;
`

const LinkBlock = styled.div`
    margin-top: -5px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobLinkBlock = styled.div <{modalBgColor: string}>`
    background-color: ${props => props.modalBgColor};
    margin: 0px 20px;
    margin-left: 22px;
    display: flex;
    outline: none;
    border-radius: 10px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobBlockLink = styled.nav <{height: string}>`
    width: 100%;
    margin-top: -5px;
    padding-top: 10px;
    max-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    transition: max-height .3s ease-in-out;
`

const LinkMobBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


export const DefoultLinkBlock = () => {
    return(
            <BlockLink>
                <LinkBlock>
                    <Customlink to="/my">My</Customlink>
                </LinkBlock>
                <LinkBlock>
                    <Customlink to="/earn">Earn</Customlink>
                </LinkBlock>
                <LinkBlock>
                    <Customlink to="/borrow">Borrow</Customlink>
                </LinkBlock>
                <LinkBlock>
                    <Customlink to="/liquidation">Liquidation</Customlink>
                </LinkBlock>
            </BlockLink>
    )
}

export const MobileLinkBlock = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    return(
        <LinkMobBlock>
           <NavBlock navBlockBg={theme.navBlockBg} padding={accordion.active == true ? '20px' : '0px'}>
                <MobBlockLink  height={accordion.height}>
                    <MobLinkBlock style={{marginTop: "-5px"}} modalBgColor={theme.modalBgColor}>
                        <Customlink to="/my">My</Customlink>
                    </MobLinkBlock>
                    <MobLinkBlock modalBgColor={theme.modalBgColor}>
                        <Customlink to="/earn">Earn</Customlink>
                    </MobLinkBlock>
                    <MobLinkBlock modalBgColor={theme.modalBgColor}>
                        <Customlink to="/borrow">Borrow</Customlink>
                    </MobLinkBlock>
                    <MobLinkBlock modalBgColor={theme.modalBgColor}>
                        <Customlink to="/liquidation">Liquidation</Customlink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
            
        </LinkMobBlock>
    )
}