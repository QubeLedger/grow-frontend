import styled from "styled-components";
import { EarnWithdrawalHeader } from "../WithdrawalHeader/EarnWithdrawalHeader";
import { EarnWithdrawalTokenField } from "../WithdrawalTokenField/WithdrawalTokenField";
import { EarnWithdrawalConfirm } from '../WithdrawalConfirm/EarnWithdrawalConfirm';
import { WithdrawalModalTransaction } from "../../../../Modal/WithdrawalModal/ModalTransaction";

const ContrainerBlock = styled.div`
    width: 400px;
    height: 100%;
    padding: 0 20px;
`


export const EarnWithdrawalContainer = () => {
    return(
        <ContrainerBlock>
            <EarnWithdrawalHeader/>
            <EarnWithdrawalTokenField/>
            <WithdrawalModalTransaction/>
        </ContrainerBlock>
    )
}