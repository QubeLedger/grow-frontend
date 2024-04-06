import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { ButtonBlock, ConfirmButton } from '../../../Buttton/BorrowConfirm/BorrowConfirm';
import { CreateLend, WithdrawalLend } from '../../../../functions/lend';
import { AmountIn } from '../../../../hooks/useAmountInStore';
import { Wallet } from '../../../../hooks/useWallet';
import { Client } from '../../../../hooks/useClient';
import { useShowTransactionModalDeposit, useShowTransactionModalWithdrawal } from '../../../../hooks/useShowModal';
import { useAssetStore } from '../../../../hooks/useAssetStore';
import { useParams } from 'react-router';
import { QUBE_TESTNET_INFO } from '../../../../constants';
import { LoadingModalComponent } from '../../helpers/LoadingModalComponent';
import { SucceedModalComponent } from '../../helpers/SucceedModalComponent';
import { FailedModalComponent } from '../../helpers/FailedModalComponent';
import { RejectedModalComponent } from '../../helpers/RejectedModalComponent';
import { useToggleTheme } from '../../../../hooks/useToggleTheme';

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
    width: 100%;
    height: 50px;
    font-size: 19px;
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

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Block = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
`

const TextBlock = styled.div`
    width: 90%;
    text-align: left;
`

const Text = styled.a <{ TextColor: string }>`
    font-size: 11px;
    color: ${props => props.TextColor};
`

const Field = styled.div`
    width: 90%;
    height: 65px;
    background: transparent;
    border-radius: 15px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`

const LogoBlock = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
`

const TokenLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`

const TokenName = styled.a <{ TextColor: string }>`
    font-size: 24px;
    color: ${props => props.TextColor};
    font-weight: 500;
    margin-left: 10px;
`

const AmountBlock = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`

const AmountToken = styled.a <{ TextColor: string }>`
    font-size: 25px;
    color: ${props => props.TextColor};
    font-weight: 500;
`

const GradientBlock = styled.div`
    width: 90%;
    height: 5px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border-radius: 50px;
    margin-top: 10px;
`

const InfoBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LTVBlock = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
`

const InfoText = styled.h1`
    font-size: 16px;
    color: #BABABA;
    margin: 0;
`

const LTV = styled.h1`
    font-size: 16px;
`

const LTVInfo = styled.h1 <{ TextColor: string }>`
    font-size: 16px;
    color: ${props => props.TextColor};
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
`

export function WithdrawalModal(
    TextColor: string,
    Logo: string,
    Name: string,
    Amount: string,
    amtIn: AmountIn,
    wallet: Wallet,
    client: Client,
    onCLose: () => void,
) {
    const [ShowTransactionModalWithdrawal, setShowTransactionModalWithdrawal] = useShowTransactionModalWithdrawal();
    const [ assets, setAssets ] = useAssetStore();
    const [theme, setTheme] = useToggleTheme();
    let { denom } = useParams()
    let temp_asset = assets.find((asset) => asset.Display == denom)

    let ContentModalNotPending = <>
        <ContentDiv>
            <Container>
                <Block>
                    <TextBlock>
                        <Text TextColor={TextColor}>You'll get</Text>
                    </TextBlock>
                    <Field>
                        <LogoBlock>
                            <TokenLogo src={Logo}></TokenLogo>
                            <TokenName TextColor={TextColor}>{Name}</TokenName>
                        </LogoBlock>
                        <AmountBlock>
                            <AmountToken TextColor={TextColor}>{Amount}</AmountToken>
                        </AmountBlock>
                    </Field>
                    <GradientBlock />
                    <InfoBlock>
                        <BlockInfo>
                            <InfoText>Network cost</InfoText>
                            <LTVInfo TextColor="#44A884">{QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.average} {QUBE_TESTNET_INFO.feeCurrencies[0].coinDenom}</LTVInfo>
                        </BlockInfo>
                    </InfoBlock>
                </Block>
            </Container>
            <ButtonBlock>
                <ConfirmButton onClick={() => {
                    setShowTransactionModalWithdrawal({ b: true, isPending: true, status: "" });
                    WithdrawalLend(amtIn, wallet, client).then((
                        status
                    ) => {
                        setShowTransactionModalWithdrawal({ b: ShowTransactionModalWithdrawal.b, isPending: true, status: status })
                    })

                }}>Confirm</ConfirmButton>
            </ButtonBlock>
        </ContentDiv>
    </>

    let PendingTxComponent;
    switch (ShowTransactionModalWithdrawal.status) {
        case "":
            PendingTxComponent = LoadingModalComponent(
                "withdrawal",
                theme
            )
            break;

        case "Succeed":
            PendingTxComponent = SucceedModalComponent(
                "withdrawal",
                theme
            )
            break;

        case "Failed":
            PendingTxComponent = FailedModalComponent(
                "withdrawal",
                theme
            )
            break;

        case "Error":
            PendingTxComponent = FailedModalComponent(
                "withdrawal",
                theme
            )
            break;

    }

    return <>
        <CloseDiv>
            <HeaderBlock>
                <HeaderText TextColor={TextColor}>Confirm withdrawal</HeaderText>
            </HeaderBlock>
            <CloseButton TextColor={TextColor}>
                <a style={{ cursor: "pointer" }} onClick={onCLose} aria-hidden>×</a>
            </CloseButton>
        </CloseDiv>
        {ShowTransactionModalWithdrawal.isPending ? PendingTxComponent : ContentModalNotPending}
    </>
}