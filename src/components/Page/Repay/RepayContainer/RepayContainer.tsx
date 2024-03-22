import styled from "styled-components";
import { RepayField } from "../RepayField/RepayField";
import { RepayInfo } from "../RepayInfo/RepayInfo";
import { RepayConfirm } from "../../../Buttton/RepayConfirm/RepayConfirm";
import { RepayModalTransaction } from "../../../Modal/RepayModal/ModalTransaction/ModalTransaction";

const Contrainer = styled.div`
    width: 400px;
    height: 500px;
`

export const RepayContainer = () => {
    return(
        <Contrainer>
            <RepayField/>
            <RepayInfo/>
            <RepayModalTransaction/>
        </Contrainer>
    ) 
}