import styled from "styled-components";
import { useWallet } from "../../../../../hooks/useWallet";
import { useAmountWithdrawalEarnStore } from "../../../../../hooks/useAmountInStore";
import { useShowTransactionModalWithdrawal, useShowWalletModal } from "../../../../../hooks/useShowModal";
import { TOKEN_INFO } from "../../../../../constants";
import { useClient } from "../../../../../hooks/useClient";
import { useLendStore } from "../../../../../hooks/usePositionStore";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { Modal } from "../../../../Modal/Modal";
import { WithdrawalModal } from "../../../../Modal/WithdrawalPageModal/ConfirmModal/ModalTransaction";

const ConfirmButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 19px;
    font-weight: 700;
    background: linear-gradient(to right, #6db8ff, #0089ff);
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: black;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const InsufficientConfirmButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 19px;
    font-weight: 700;
    background: #757575;
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: black;
    transition: all .15s ease-in-out;
    &:active {
        transform: scale(0.95);
    }
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 35px;
`

export const EarnWithdrawalConfirm = () => {

    const [wallet, _] = useWallet();
    const [amtIn, setAmountWithdrawalEarnStore] = useAmountWithdrawalEarnStore()
    const [walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [client, setClient] = useClient();
    const [lends, setLends] = useLendStore();
    const [ShowTransactionModalWithdrawal, setShowTransactionModalWithdrawal] = useShowTransactionModalWithdrawal();
    const [theme, setTheme] = useToggleTheme();

    const open = () => { setShowTransactionModalWithdrawal({ b: true }) };
    const close = () => { setShowTransactionModalWithdrawal({ b: false }) };

    let temp_token = TOKEN_INFO.find((token) => token.Base == amtIn.base)
    let temp_lend = lends.find((lend) => lend.amountIn_denom == temp_token?.Denom)
    let Button;

    const ModalComponent = Modal(
        ShowTransactionModalWithdrawal.b,
        close,
        WithdrawalModal(
            theme.TextColor,
            temp_token?.Logo ? temp_token?.Logo : "",
            temp_token?.Base ? temp_token?.Base : "",
            amtIn.amt,
            amtIn,
            wallet,
            client,
            close,
        ),
        theme.modalBgColor,
        theme.modalBorder
    )

    if (wallet.init == false) {
        Button = <ButtonBlock onClick={() => { setWalletModalStatus({ b: true }) }}>
            <ConfirmButton>Connect wallet</ConfirmButton>
        </ButtonBlock>
    } else {
        if (amtIn.amt == '' || amtIn.amt == '0' || isNaN(Number(amtIn.amt))) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Enter {amtIn.base} amount</InsufficientConfirmButton>
            </ButtonBlock>
        } else if (temp_lend === undefined) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>No {amtIn.base} deposit</InsufficientConfirmButton>
            </ButtonBlock>
        } else if (Number(amtIn.amt) > (Number(temp_lend?.amountIn_amount) / 10 ** 6)) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Insufficient {amtIn.base} balance</InsufficientConfirmButton>
            </ButtonBlock>
        } else {
            Button = <>
                <ButtonBlock>
                    <ConfirmButton onClick={open}>Confirm</ConfirmButton>
                </ButtonBlock>
                {ModalComponent}
            </>
        }
    }

    return (
        <>{Button}</>
    )
}