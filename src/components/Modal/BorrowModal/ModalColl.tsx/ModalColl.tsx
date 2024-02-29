import styled from "styled-components";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated } from '@react-spring/web';
import QubeLogo from '../../../../assets/svg/QubeLogo.webp'
import ArrowBlack from '../../../../assets/svg/ArrowBlack.webp'
import ArrowWhite from '../../../../assets/svg/ArrowWhite.webp'
import { useShowModalTo } from "../../../../hooks/useShowModal";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay) `
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

const Logo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`

const CloseButton = styled.button <{TextColor: string}>`
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

const OpenButton = styled.button <{TextColor: string}>`
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

const ModalText = styled.h4 <{TextColor: string}>`
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

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    @media (max-width: 500px) {
        flex-direction: column;
        }
`

const Arrow = styled.svg <{ArrrowColor: string}>`
    width: 13px;
    height: 13px;
    margin-top: -5px;
    margin-left: 5px;
    background: url(${props => props.ArrrowColor});
    background-repeat: no-repeat;
    background-size: contain;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{modalBgColor: string, modalBorder: string}>`
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 400px;
        height: 500px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border: ${props => props.modalBorder};
        margin-top: -10px;
        position: relative;
        outline: none;
        @media (max-width: 500px) {
            width: 335px;
            height: 600px;
            margin-left: 10px;
            margin-right: 10px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const ModalColl = () => {

    const [ walletModalStatus, setWalletModalStatus ] = useShowModalTo();
    const [theme, setTheme] = useToggleTheme()

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    return (
      <ModalBlock>
        <OpenButton TextColor={theme.TextColor} onClick={open}>
        <Logo src={QubeLogo}></Logo>
           QUBE
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
                <ContentDiv></ContentDiv>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </ModalBlock>
    );
}