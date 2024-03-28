import styled from "styled-components";
import { RepayHeader } from '../RepayHeader/RepayHeader';
import { RepayField } from "../RepayField/RepayField";
import { RepayInfo } from "../RepayInfo/RepayInfo";
import { RepayConfirm } from "../../../Buttton/RepayConfirm/RepayConfirm";

const Contrainer = styled.div`
    width: 400px;
    height: 500px;
`

export const RepayContainer = () => {
    return(
        <Contrainer>
            <RepayField/>
            <RepayInfo/>
            <RepayConfirm/>
        </Contrainer>
    ) 
}