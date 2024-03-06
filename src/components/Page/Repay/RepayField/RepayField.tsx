import styled from "styled-components";
import { RepayWantTo } from "./WantTo/WantTo";

const Fields = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const RepayField = () => {
    return(
        <Fields>
            <RepayWantTo></RepayWantTo>
        </Fields>
    ) 
} 