import styled from "styled-components";
import { Accordion, useAccordionEarn } from '../../../../../../hooks/useAccordionEarn';
import { EarnCustomLink } from "../../../EarnCustomLink/EarnCustomLink";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";
import { useAssetStore } from "../../../../../../hooks/useAssetStore";


export interface Vault {
    Display: string,
    Denom: string,
    Logo: string,
    apr: number,
    type: string,
}


const AccordionBlock = styled.div <{height: string, BorderField: string}>`
    width: 100%;
    max-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    border: ${props => props.BorderField};
    border-radius: 15px;
    transition: max-height .3s ease-in-out;
    overflow: hidden;
    padding-bottom: 10px;
    cursor: pointer;
    margin-bottom: 12px;
`

const ButtonsBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

const TokenFieldBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

const EarnDepositButton = styled.button `
    width: 130px;
    height: 100%;
    color: white;
    border: none;
    border-radius: 50px;
    background: linear-gradient(to right, #3B9CFC, #6CBBFF);
    margin-right: 20px;
    margin-top: 5px;
    padding: 7px 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    transition: all .3s ease-in-out;
    font-size: 15px;
    cursor: pointer;
`

const EarnWithdrawalButton = styled.button`
    width: 130px;
    height: 100%;
    color: #3B9CFC;
    border: 2px solid #3B9CFC;
    border-radius: 50px;
    background:transparent;
    margin-left: 20px;
    margin-top: 5px;
    padding: 7px 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    transition: all .3s ease-in-out;
    font-size: 15px;
    cursor: pointer;
`

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

const GrowProto = styled.div`
    max-width: 100%;
    border: 0.18rem solid #3B9CFC;
    margin-left: 24px;
    padding: 2px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

const LendProto = styled.div`
    max-width: 100%;
    border: 0.12rem solid #3B9CFC;
    margin-left: 24px;
    padding: 2px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export const ARPBlock = styled.div`
    max-width: 100%;
    height: 100%;
    margin-right: 15px;
    display: flex;
    align-items: center;
`

export const ARPText = styled.a`
    font-size: 20px;
    font-weight: 700;
    color: #44A884;
`

function GetAccordionByBase(eAccordions: Accordion[], base: string): Accordion | undefined {
    return eAccordions.find((ea) => ea.base == base)
}

export const VaultField = () => {

    const [eAccordions, setEAccordion] = useAccordionEarn();
    const [theme, setTheme] = useToggleTheme()
    const [assets, setAssets] = useAssetStore()

    let CheckAccrdion = (acc: Accordion | undefined): string => {
        return acc === undefined ? "60px" : acc.height
    }

    function openAccordion (base: string) {
        let index_eAccordion = eAccordions.findIndex((acc) => acc.base == base)
        let active = eAccordions[index_eAccordion] === undefined ? false : eAccordions[index_eAccordion].active
        if(active == false) {
            eAccordions[index_eAccordion] = {
                base,
                active: true,
                height: '170px',
            }
            setEAccordion(eAccordions)
        } else if (active == true) {
            eAccordions[index_eAccordion] = {
                base,
                active: false,
                height: '55px',
            }
            setEAccordion(eAccordions)
        }
    }

    const VaultsComponent = assets.map((asset, i) => 
        <AccordionBlock BorderField={theme.BorderField} height={CheckAccrdion(GetAccordionByBase(eAccordions, asset.Display))} onClick={() => {openAccordion(asset.Display)}}>
            <TokenFieldBlock>
                <TokensBlock>
                    <TokensImg src={asset.Logo}></TokensImg>
                    <TokensName TextColor={theme.TextColor}>{asset.Display}</TokensName>
                    {asset.AssetType == "lend" ? <LendProto><TokensProtoText>Lend</TokensProtoText></LendProto> : <GrowProto><TokensProtoText>Grow</TokensProtoText></GrowProto>}
                </TokensBlock>
                <ARPBlock>
                    <ARPText>{asset.sir.toFixed(2)}%</ARPText>
                </ARPBlock>
            </TokenFieldBlock>
            <ButtonsBlock >
                <EarnCustomLink to={`/deposit/${asset.Display}`}>
                    <EarnDepositButton>Deposit</EarnDepositButton>
                </EarnCustomLink>
                <EarnCustomLink to={`/withdrawal/${asset.Display}`}>
                    <EarnWithdrawalButton>Withdrawal</EarnWithdrawalButton>
                </EarnCustomLink>
            </ButtonsBlock>
        </AccordionBlock>
    )

    return(
        <>{VaultsComponent}</>
    )
}
