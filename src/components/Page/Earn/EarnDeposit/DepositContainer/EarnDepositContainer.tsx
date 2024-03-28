import styled from "styled-components";
import { EarnDepositHeader } from "../DepositHeader/EarnDepositHeader";
import { EarnDepositTokenField } from "../DepositTokenField/DepositTokenField";
import { EarnDepositConfirm } from "../DepositConfirm/EarnDepositConfirm";
import { EarnDepositAPR } from "../DepositARP/EarnDepositaAPR";
import { DepositModalTransaction } from "../../../../Modal/DepositPageModal/ConfirmModal/ModalTransaction";

const ContrainerBlock = styled.div`
    width: 400px;
    height: 100%;
    padding: 0 20px;
`


export const EarnDepositContainer = () => {
    return(
        <ContrainerBlock>
            <EarnDepositHeader/>
            <EarnDepositTokenField/>
            <EarnDepositAPR/>
            <DepositModalTransaction/>
        </ContrainerBlock>
    )
}