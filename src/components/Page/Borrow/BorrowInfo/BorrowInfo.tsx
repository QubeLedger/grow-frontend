import styled from "styled-components";
import { usePositionStore } from "../../../../hooks/usePositionStore";

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
    const [ position, setPosition ] = usePositionStore();
    //console.log("qLabs: DEBUG: user position: ", position)

    let risk_rate = ((position.borrowedAmountInUSD / position.lendAmountInUSD )* (1 / 60))

    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Interest Rate</InfoText>
                <LTVInfo>0%</LTVInfo>
            </BlockInfo>
            <LTVBlock>
                <LTV>Risk Rate</LTV>
                <LTVInfo>{isNaN(risk_rate)? "0.0" : risk_rate.toFixed(1)}%</LTVInfo>
            </LTVBlock>
        </InfoBlock>
    )
}