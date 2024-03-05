import styled from "styled-components";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated } from '@react-spring/web';
import CosmosLogo from '../../../../assets/svg/CosmosLogo.webp'
import ArrowBlack from '../../../../assets/svg/ArrowBlack.webp'
import ArrowWhite from '../../../../assets/svg/ArrowWhite.webp'
import loop from '../../../../assets/svg/loop.svg'
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useShowModalFrom } from "../../../../hooks/useShowModal";

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay)`
    &[data-reach-dialog-overlay] {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:flex;
        align-items: center;
        justify-content: center; 
        transition: background-color 3s;
        background-color: rgba(0,0,0,.45);
    }
`

const ModalBlock = styled.div`
    display: flex;
    align-items: center;
`

const CloseButton = styled.button <{ TextColor: string }>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 26px;
    margin-top: -10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`

const OpenButton = styled.button <{ TextColor: string }>`
    max-width:100%;
    background:transparent;
    border:none;
    outline: none;
    cursor: pointer;
    border-radius: 50px;
    font-family: 'Metropolis', sans-serif;
    font-size: 18px;
    font-weight: 600;
    padding: 0;
    white-space: nowrap;
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: ${props => props.TextColor};
`

const CloseButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
`

const ModalText = styled.h4 <{ TextColor: string }>`
    margin-left: 26px;
    font-size: 20px;
    color: ${props => props.TextColor};
`

const ModalTextBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const CloseDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
`

const Logo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 10px;
`

const Arrow = styled.svg <{ ArrrowColor: string }>`
    width: 13px;
    height: 13px;
    margin-top: -5px;
    margin-left: 5px;
    background: url(${props => props.ArrrowColor});
    background-repeat: no-repeat;
    background-size: contain;
`

const FirstField = styled.div <{ ModalHoverColor: string, TextColor: string }>`
    width: 100%;
    height: 60px;
    color: ${props => props.TextColor};
    transition: all .3s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    :hover{
        background: ${props => props.ModalHoverColor};
        transition: background .2s ease-in-out;
    }
`

const TokenFields = styled.button <{ TextColor: string }>`
    background-color: transparent;
    border: none;
    width: 85%;
    margin-top: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: ${props => props.TextColor};
    cursor: pointer;
`

const FieldButtonImg = styled.img`
    width: 45px;
    border-radius: 50px;
`

const TokensText = styled.div `
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TokensTextH3 = styled.h3 `
    margin-top: 15px;
`

const TokensTextH2Number = styled.h2 ` 
    margin-left: auto;
`

const TokensTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
`

const SearchDiv = styled.div <{inputBgColor: string, modalBorder: string}>`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.inputBgColor};
    border-radius: 5px;
    margin-bottom: 10px;
    border: ${props => props.modalBorder};
    width: 85%;
    
`

const SearchBorder = styled.div <{modalBorder: string}>`
    border-bottom: ${props => props.modalBorder};
    width: 100%;
    display: flex;
    justify-content: center;
`

const LoopImg = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 15px;
`

const SearchToken = styled.input `
    width: 300px;
    height: 30px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    outline: none;
    font-size: 16px;
    color: #5e5e5e;
    font-weight: 600;
    font-family: 'Metropolis', sans-serif;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{modalBgColor: string, modalBorder: string}> `
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 380px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        border-radius: 10px;
        border: ${props => props.modalBorder};
        margin-top: 70px;
        @media (max-width: 500px) {
            width: 335px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const ModalWant = () => {

    const [ walletModalStatus, setWalletModalStatus ] = useShowModalFrom();
    const [theme, setTheme] = useToggleTheme()

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    return (
      <ModalBlock>
        <OpenButton TextColor={theme.TextColor} onClick={open}>
        <Logo src={CosmosLogo}></Logo>
           ATOM
        <Arrow ArrrowColor={theme.active == true ? ArrowWhite : ArrowBlack}></Arrow>
            </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b}  onDismiss={close}>
            <StyledDialogContent modalBgColor={theme.modalBgColor} modalBorder={theme.modalBorder}>
            <CloseDiv>
                    <ModalTextBlock>
                        <ModalText TextColor={theme.TextColor}>Select a token</ModalText>
                    </ModalTextBlock>
                    <CloseButtonBlock>
                        <CloseButton TextColor={theme.TextColor} onClick={close}>
                        <span aria-hidden>×</span>
                        </CloseButton>
                    </CloseButtonBlock>
                </CloseDiv>
                <SearchBorder modalBorder={theme.modalBorder}>
                    <SearchDiv inputBgColor={theme.inputBgColor} modalBorder={theme.modalBorder}>
                        <LoopImg src={loop}></LoopImg>
                        <SearchToken placeholder='Search'></SearchToken>
                    </SearchDiv>
                </SearchBorder>
                <FirstField ModalHoverColor={theme.ModalHoverColor} TextColor={theme.TextColor}>
                        <TokenFields TextColor={theme.TextColor}>
                            <FieldButtonImg src={CosmosLogo}></FieldButtonImg>
                            <TokensText >
                                <TokensTextH3>ATOM</TokensTextH3>
                                <TokensTextH5>Cosmos Hub</TokensTextH5>
                            </TokensText>
                            <TokensTextH2Number >0</TokensTextH2Number>
                        </TokenFields>
                    </FirstField>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </ModalBlock>
    );
}