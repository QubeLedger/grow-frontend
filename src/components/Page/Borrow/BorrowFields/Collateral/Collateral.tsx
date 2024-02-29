import styled from "styled-components";
import { Input } from "../Input/Input";
import { ModalColl } from "../../../../Modal/BorrowModal/ModalColl.tsx/ModalColl";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const Coll = styled.div`
    width: 90%;
    height: 60px;
    margin-top: 60px;
`

const TextColl = styled.div`
    font-size: 15px;
    color: #BABABA;
    font-weight: 700;
    margin-bottom: 10px;
`

const FieldCool = styled.div <{BorderField: string}>`
    width: 100%;
    height: 100%;
    border: ${props => props.BorderField};
    border-radius: 20px;
    display: flex;
    align-items: center;
`

const TokenBlock = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const Collateral = () => {
        
    const [theme, setTheme] = useToggleTheme()
    return(
        <Coll>
            <TextColl>Collateral</TextColl>
            <FieldCool BorderField={theme.BorderField}>
                <TokenBlock>
                    <ModalColl/>
                </TokenBlock>
                <Input></Input>
            </FieldCool>
        </Coll>
    )
}