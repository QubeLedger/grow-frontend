import styled from "styled-components";
import { WantTo } from "./WantTo/WantTo";
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
            <WantTo></WantTo>
            {/*<Collateral></Collateral>*/}
        </Fields>
    ) 
} 