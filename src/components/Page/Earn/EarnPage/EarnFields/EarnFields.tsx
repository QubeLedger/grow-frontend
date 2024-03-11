import styled from "styled-components";
import { InfoField } from "./InfoField/InfoField";
import { VaultField } from "./TokenField/TokenField";

const FieldsBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: none;
`


export const EarnFields = () => {
    return(
        <FieldsBlock>
            <InfoField/>
            <VaultField/>
        </FieldsBlock>
    )
}