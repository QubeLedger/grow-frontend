import styled from "styled-components";

const InfoBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InfoText = styled.h2`
    font-size: 12px;
    color: #BABABA;
    margin: 10px 10px;
`


export const InfoField = () => {
    return(
        <InfoBlock>
            <InfoText>Asset</InfoText>
            <InfoText>Est. APR</InfoText>
        </InfoBlock>
    )
}