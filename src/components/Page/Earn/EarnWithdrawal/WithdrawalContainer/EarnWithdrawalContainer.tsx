import styled from "styled-components";
import { EarnWithdrawalHeader } from "../WithdrawalHeader/EarnWithdrawalHeader";
import { EarnWithdrawalTokenField } from "../WithdrawalTokenField/WithdrawalTokenField";
import { EarnWithdrawalConfirm } from '../WithdrawalConfirm/EarnWithdrawalConfirm';

const ContrainerBlock = styled.div`
    width: 400px;
    height: 100%;
    padding: 20px;
`


export const EarnWithdrawalContainer = () => {
    return(
        <ContrainerBlock>
            <EarnWithdrawalHeader/>
            <EarnWithdrawalTokenField/>
            <EarnWithdrawalConfirm/>
        </ContrainerBlock>
    )
}