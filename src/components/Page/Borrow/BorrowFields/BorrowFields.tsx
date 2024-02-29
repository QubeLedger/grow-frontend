import styled from "styled-components";
import { WontTo } from "./WontTo/WontTo";
import { Collateral } from "./Collateral/Collateral";

const Fields = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const BorrowFields = () => {
    return(
        <Fields>
            <WontTo></WontTo>
            <Collateral></Collateral>
        </Fields>
    ) 
} 