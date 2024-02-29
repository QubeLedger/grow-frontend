import styled from "styled-components";

const InfoBlock = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LTVBlock = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
`

const InfoText = styled.h1`
    font-size: 18px;
    color: #BABABA;
    margin: 0;
`

const LTV = styled.h1`
    font-size: 18px;
`

const LTVInfo = styled.h1`
    font-size: 18px;
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
`

export const BorrowInfo = () => {
    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Interest Rate</InfoText>
                <LTVInfo>0%</LTVInfo>
            </BlockInfo>
            <LTVBlock>
                <LTV>Max LTV</LTV>
                <LTVInfo>0%</LTVInfo>
            </LTVBlock>
        </InfoBlock>
    )
}