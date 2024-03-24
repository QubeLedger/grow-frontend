import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated, useTransition } from '@react-spring/web';
import { useShowTransactionModalBorrow, useShowTransactionModalRepay } from '../../../../hooks/useShowModal';
import { useToggleTheme } from '../../../../hooks/useToggleTheme';
import { BorrowConfirm } from '../../../Buttton/BorrowConfirm/BorrowConfirm';
import { RepayModalContent } from './ModalContent';
import { isTemplateHead } from 'typescript';
import { Modal } from '../../Modal';
import { RepayConfirm } from '../../../Buttton/RepayConfirm/RepayConfirm';

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay)`
    &[data-reach-dialog-overlay] {
        z-index: 1;
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
        @media (max-width: 500px) {
            align-items: flex-end;
        }
    }
`

const OpenButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CloseButton = styled.button <{ TextColor: string }>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 20px;
    margin-top: -1px;
    background-color: transparent;
    border: none;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`

const OpenButton = styled.button`
    width: 260px;
    height: 40px;
    font-size: 17px;
    font-weight: 700;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: #fff;
    margin-top: 20px;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    margin-top: 20px;
`

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const HeaderText = styled.a <{ TextColor: string }>`
    font-size: 14px;
    color: ${props => props.TextColor};
    white-space: nowrap;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 17px;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{ modalBgColor: string, modalBorder: string }>`
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 375px;
        height: 430px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border:  ${props => props.modalBorder};
        margin-top: -10px;
        position: relative;
        outline: none;
        transition: all .3s ease-in-out;
        @media (max-width: 500px) {
            width: 100%;
            border-radius: 0px;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
        }
    }
`


export const RepayModalTransaction = () => {

    const open = () => { setShowTransactionModalRepay({ b: true }) };
    const close = () => { setShowTransactionModalRepay({ b: false }) };
    const [ShowTransactionModalRepay, setShowTransactionModalRepay] = useShowTransactionModalRepay();
    const [theme, setTheme] = useToggleTheme();

    const Content = <>
        <CloseDiv>
            <HeaderBlock>
                <HeaderText TextColor={theme.TextColor}>Confirm Repay</HeaderText>
            </HeaderBlock>
            <CloseButton TextColor={theme.TextColor}>
                <a style={{ cursor: "pointer" }} onClick={close} aria-hidden>×</a>
            </CloseButton>
        </CloseDiv>
        <ContentDiv>
            <RepayModalContent />
            <RepayConfirm />
        </ContentDiv>
    </>

    const ModalComponent = Modal(
        ShowTransactionModalRepay.b,
        close,
        Content,
        theme.modalBgColor,
        theme.modalBorder
    )

    return (
        <OpenButtonBlock>
            <OpenButton onClick={open}>Confirm</OpenButton>
            {ModalComponent}

        </OpenButtonBlock>
    );
}