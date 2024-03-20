import styled from "styled-components";
import { Customlink } from "../CustomLink/CustomLink";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import myLogo from '../../../assets/svg/WalletLogo.svg'
import earnLogo from '../../../assets/svg/EarnLogo.svg'
import borrowLogo from '../../../assets/svg/BorrowLogo.svg'
import liquidationLogo from '../../../assets/svg/LiquidationLogo.svg'
import myBlackLogo from '../../../assets/svg/myBlackLogo.svg'
import earnBlackLogo from '../../../assets/svg/earnBlackLogo.svg'
import borrowBlackLogo from '../../../assets/svg/borrowBlackLogo.svg'
import liquidationBlackLogo from '../../../assets/svg/liquidationBlackLogo.svg'


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

const NavBlock = styled.div <{navBlockBg: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.navBlockBg};
    transition: padding-bottom .3s ease-in-out;
`

const LinkBlock = styled.div`
    margin-top: -5px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobLinkBlock = styled.div`
    width: 100px;
    display: flex;
    outline: none;
    margin: 0 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobBlockLink = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    transition: max-height .3s ease-in-out;
    justify-content: center;
    align-items: center;
`

const LinkMobBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`

const WalletLogo = styled.svg <{icon: string}>`
    width: 20px;
    height: 20px;
    background: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
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
           <NavBlock navBlockBg={theme.navBlockBg}>
                <MobBlockLink>
                    <MobLinkBlock>
                        
                        <Customlink to="/my">
                            <WalletLogo icon={theme.active == true ? myBlackLogo : myLogo}></WalletLogo>
                            My
                        </Customlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Customlink to="/earn">
                            <WalletLogo icon={theme.active == true ? earnBlackLogo : earnLogo}></WalletLogo>
                            Earn
                            </Customlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Customlink to="/borrow">
                            <WalletLogo icon={theme.active == true ? borrowBlackLogo : borrowLogo}></WalletLogo>
                            Borrow
                            </Customlink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <Customlink to="/liquidation">
                            <WalletLogo icon={theme.active == true ? liquidationBlackLogo : liquidationLogo}></WalletLogo>
                            Liquidation
                            </Customlink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
        </LinkMobBlock>
    )
}