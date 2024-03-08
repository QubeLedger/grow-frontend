import { SigningStargateClient } from "@cosmjs/stargate";  
import { QUBE_TESTNET_INFO } from "../constants";
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, GasPrice } from "@cosmjs/stargate";
import { 
        typeUrlMsgGrowDeposit,
        typeUrlMsgGrowWithdrawal,
        typeUrlMsgCreateBorrow,
        typeUrlMsgDeleteBorrow,
        typeUrlMsgMsgCreateLend,
        typeUrlMsgWithdrawalLend,
        typeUrlMsgOpenLiquidationPosition,
        typeUrlMsgCloseLiquidationPosition,
        MsgGrowDeposit,
        MsgGrowWithdrawal,
        MsgCreateBorrow,
        MsgDeleteBorrow,
        MsgCreateLend,
        MsgWithdrawalLend,
        MsgOpenLiquidationPosition,
        MsgCloseLiquidationPosition,
} from "../constants/cosmos/proto/grow/tx";

export async function InitSigner() {
        try {
                const reg = new Registry(defaultRegistryTypes)
                reg.register(typeUrlMsgGrowDeposit, MsgGrowDeposit)
                reg.register(typeUrlMsgGrowWithdrawal, MsgGrowWithdrawal)
                reg.register(typeUrlMsgCreateBorrow, MsgCreateBorrow)
                reg.register(typeUrlMsgDeleteBorrow, MsgDeleteBorrow)
                reg.register(typeUrlMsgMsgCreateLend, MsgCreateLend)
                reg.register(typeUrlMsgWithdrawalLend, MsgWithdrawalLend)
                reg.register(typeUrlMsgOpenLiquidationPosition, MsgOpenLiquidationPosition)
                reg.register(typeUrlMsgCloseLiquidationPosition, MsgCloseLiquidationPosition)


                var offlineSigner = (window as any).getOfflineSigner(QUBE_TESTNET_INFO.chainId);
                var accounts = await offlineSigner.getAccounts();

                var client = await SigningStargateClient.connectWithSigner(
                        QUBE_TESTNET_INFO.rpc,
                        offlineSigner,
                        {
                                registry: reg,
                                gasPrice: GasPrice.fromString(Number(QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.average).toFixed(0) + QUBE_TESTNET_INFO.feeCurrencies[0].coinMinimalDenom)
                                
                        }
                );

                return ({init: true, client: client, accounts: accounts});
        } catch (e) {
                return ({init: false, client: null, accounts: null}); 
        }
}