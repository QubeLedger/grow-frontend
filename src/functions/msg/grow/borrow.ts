import { Wallet, useWallet } from "../../../hooks/useWallet";
import { 
        typeUrlMsgCreateBorrow,
        typeUrlMsgDeleteBorrow,
        MsgCreateBorrow,
        MsgDeleteBorrow,
} from "../../../constants/cosmos/proto/grow/tx";
import { AmountIn, useAmountDepositEarnStore, useAmountWithdrawalEarnStore } from "../../../hooks/useAmountInStore";
import { TOKEN_INFO } from "../../../constants";

interface Msg {
        typeUrl: string
        value: any
}


export function MakeCreateBorrowMsg(amtIn: AmountIn, wallet: Wallet): Msg {
        
        let denom = TOKEN_INFO.find((token) => token.Denom == amtIn.base)

        let Msg: MsgCreateBorrow = {
                borrower:  wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32Address : "",
                denomIn: String(denom?.Denom),
                desiredAmount: (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)).toFixed(0) + String(denom?.Denom),
        };

        let msg: Msg = {
            typeUrl:typeUrlMsgCreateBorrow,
            value: Msg,
        };

        return msg
}

export function MakeDeleteBorrowMsg(amtIn: AmountIn, wallet: Wallet): Msg {        
        let denom = TOKEN_INFO.find((token) => token.Denom == amtIn.base)

        let Msg: MsgDeleteBorrow = {
                borrower:  wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32Address : "",
                denomOut: String(denom?.Denom),
                amountIn: (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)).toFixed(0) + String(denom?.Denom),
        };

        let msg: Msg = {
            typeUrl: typeUrlMsgDeleteBorrow,
            value: Msg,
        };

        return msg
}