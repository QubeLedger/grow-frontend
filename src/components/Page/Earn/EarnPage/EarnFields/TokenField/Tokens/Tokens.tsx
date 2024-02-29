import styled from "styled-components";
import USQLogo from '../../../../../../../assets/svg/USQLogo.webp'
import { useToggleTheme } from "../../../../../../../hooks/useToggleTheme";
const TokensBlock = styled.div`
    max-width: 100%;
    height: 100%;
    margin-left: 15px;
    display: flex;
    align-items: center;
`

const TokensImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`

const TokensName = styled.h1 <{TextColor: string}>`
    font-size: 20px;
    margin-left: 5px;
    color: ${props => props.TextColor};
`

const TokensProtoText = styled.a`
    color: #3B9CFC;
    font-weight: 800;
    font-size: 12px;
`

const USQProto = styled.div`
    max-width: 100%;
    border: 0.18rem solid #3B9CFC;
    margin-left: 24px;
    padding: 2px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`


export const EarnUSQToken = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <TokensBlock>
            <TokensImg src={USQLogo}></TokensImg>
            <TokensName TextColor={theme.TextColor}>USQ</TokensName>
            <USQProto>
                <TokensProtoText>Grow</TokensProtoText>
            </USQProto>
        </TokensBlock>
    )
}

