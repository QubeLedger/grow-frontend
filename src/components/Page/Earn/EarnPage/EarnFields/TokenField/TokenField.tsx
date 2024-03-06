import styled from "styled-components";
import { useAccordionEarn } from '../../../../../../hooks/useAccordionEarn';
import { EarnCustomLink } from "../../../EarnCustomLink/EarnCustomLink";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";
import { useAssetStore } from "../../../../../../hooks/useAssetStore";
import { TOKEN_INFO } from "../../../../../../constants";
import { useParamsStore } from "../../../../../../hooks/useParamsStore";

export interface Vault {
    Display: string,
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
    margin-top: 12px;
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

export const VaultField = () => {

    const [eAccordion, setEAccordion] = useAccordionEarn();
    const [theme, setTheme] = useToggleTheme()
    const [assets, setAssets] = useAssetStore()
    const [params, setParams] = useParamsStore()

    let temp_vault: Vault[] = []

    function openAccordion () {
        if(eAccordion.active == false) {
            setEAccordion({
                active: true,
                height: '170px',
            })
        } else if (eAccordion.active == true) {
            setEAccordion({
                active: false,
                height: '55px',
            })
        }
    }

    assets.map((asset) => {
        TOKEN_INFO.map((token) => {
            if(asset.denom == token.Denom) {

                let utilization_rate = asset.collectively_borrow_value / asset.provide_value

                let u_static = 0
                let max_rate = 0

                if(asset.type == "volatile"){
                    u_static = params.u_static_volatile
                    max_rate = params.max_rate_volatile
                } else if(asset.type == "stable"){
                    u_static = params.u_static_stable
                    max_rate = params.max_rate_stable
                }

                let bir = 0

                if(utilization_rate < u_static) {
                    bir = params.slope_1 + (utilization_rate * ((params.slope_2 - params.slope_1) / u_static))
                } else {
                    bir = params.slope_1 + ((utilization_rate - u_static) * ((max_rate - params.slope_2) / (1 - u_static)))
                }

                let sir = bir * utilization_rate


                temp_vault.push({
                    Display: token.Base,
                    Logo: token.Logo,
                    apr: isNaN(sir) ? 0 : sir,
                    type: "lend",
                })
            }
        })
    })

    const VaultsComponent = temp_vault.map((vault) => 
        <AccordionBlock BorderField={theme.BorderField} height={eAccordion.height} onClick={openAccordion}>
            <TokenFieldBlock>
                <TokensBlock>
                    <TokensImg src={vault.Logo}></TokensImg>
                    <TokensName TextColor={theme.TextColor}>{vault.Display}</TokensName>
                    {vault.type == "lend" ? <LendProto><TokensProtoText>Lend</TokensProtoText></LendProto> : <GrowProto><TokensProtoText>Grow</TokensProtoText></GrowProto>}
                </TokensBlock>
                <ARPBlock>
                    <ARPText>{vault.apr.toFixed(1)}%</ARPText>
                </ARPBlock>
            </TokenFieldBlock>
            <ButtonsBlock >
                <EarnCustomLink to={`/deposit/${vault.Display}`}>
                    <EarnDepositButton>Deposit</EarnDepositButton>
                </EarnCustomLink>
                <EarnCustomLink to={`/withdrawal/${vault.Display}`}>
                    <EarnWithdrawalButton>Withdrawal</EarnWithdrawalButton>
                </EarnCustomLink>
            </ButtonsBlock>
        </AccordionBlock>
    )

    return(
        <>{VaultsComponent}</>
    )
}
