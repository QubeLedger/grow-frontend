import styled from "styled-components";
import { Castomlink } from "../CastomLink/CastomLink";
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
                    <Castomlink to="/my">My</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/earn">Earn</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/borrow">Borrow</Castomlink>
                </LinkBlock>
                <LinkBlock>
                    <Castomlink to="/liquidation">Liquidation</Castomlink>
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
                        <Castomlink to="/my">My</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock modalBgColor={theme.modalBgColor}>
                        <Castomlink to="/borrow">Borrow</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock modalBgColor={theme.modalBgColor}>
                        <Castomlink to="/earn">Earn</Castomlink>
                    </MobLinkBlock>
                    <MobLinkBlock modalBgColor={theme.modalBgColor}>
                        <Castomlink to="/liquidation">Liquidation</Castomlink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
            
        </LinkMobBlock>
    )
}