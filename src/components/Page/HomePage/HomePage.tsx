import styled from "styled-components";
import { EarnButton } from "../../Buttton/HomePageButtons/EarnButton/EarnButton";
import { BorrowButton } from "../../Buttton/HomePageButtons/BorrowButton/BorrowButton";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const HomePageBlock = styled.div <{margin: string}>`
    width: 100%;
    margin-top: 200px;
    padding-bottom: 30px;
    margin-left: 60px;
    transition: margin-top .3s ease-in-out;
    @media (max-width: 720px) {
        margin-top: ${props => props.margin};
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 20px;
    }
`

const Block = styled.div <{backgroundColor: string}>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`


const MainTextBlock = styled.div`
    width: 580px;
    margin-right: 20px;
    line-height:1;
    @media (max-width: 720px) {
        width: 90%;
    }
`

const MainText = styled.a <{TextColor: string}>`
    font-size: 65px;
    color: ${props => props.TextColor};
    @media (max-width: 500px) {
        font-size: 50px;
    } 
`

const BlueText = styled.a`
    color: #6CBBFF;
`

const GreyText = styled.h2 <{homePageGreyText: string}>`
    width: 90%;
    font-size: 25px;
    color: ${props => props.homePageGreyText};
    margin-top: 20px;
    @media (max-width: 500px) {
        font-size: 18px;
        margin-top: 20px;
    } 
`

const ButtonBlock = styled.div`
    max-width: 100%;
    display: flex;
    margin-top: 40px;
    @media (max-width: 500px) {
        margin-right: 20px;
        max-width: 90%;
    }
`


export const HomePage = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    return(
        <Block backgroundColor={theme.backgroundColor}>
            <HomePageBlock margin={accordion.margin}>
                <MainTextBlock>
                    <MainText TextColor={theme.TextColor}>
                        <BlueText>Save</BlueText>, <BlueText>borrow</BlueText> and 
                        <BlueText> earn</BlueText> crypto
                        assets with Qube
                        Grow.
                    </MainText>
                    <GreyText homePageGreyText={theme.homePageGreyText}>Simply lend & borrow crypto. Provide
                            liquidity to Qube Grow savings protocol
                            and earn rewards on your digital assets.
                    </GreyText>
                </MainTextBlock>
                <ButtonBlock>
                    <EarnButton/>
                    <BorrowButton/>
                </ButtonBlock>
            </HomePageBlock>
        </Block>
    )
}