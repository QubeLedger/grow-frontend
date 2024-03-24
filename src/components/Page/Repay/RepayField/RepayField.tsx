import styled from "styled-components";
import { RepayInputField } from "./WantTo/InputField";

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
            <RepayInputField></RepayInputField>
        </Fields>
    ) 
} 