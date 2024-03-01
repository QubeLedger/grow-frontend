import styled from "styled-components";
import Accordionlogo from "../../../assets/svg/AccordionLogo.webp"
import AccordionlogoBlack from '../../../assets/svg/AccordionLogoBlack.webp'
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const LinkMobButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 30px;
    outline: none;
    margin-right: 20px;
    
`

const AccrordionImg = styled.svg <{icon: string}>`
    width: 25px;
    height: 25px;
    margin-left: auto;
    background: url(${props => props.icon}) 0% 0% / contain no-repeat;
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (min-width: 1110px) {
        display: none;
    }
`

export const LinkButton = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme();

    function openLinkBlock () {
        if(accordion.active == false) {
            setAccordion({
                active: true,
                margin: '50px',
                height: '185px',
            })
        } else if (accordion.active == true) {
            setAccordion({
                active: false,
                margin: '50px',
                height: '0px',
            })
        }
    }

    return(
        <ButtonBlock>
            <LinkMobButton onClick={openLinkBlock}>
                <AccrordionImg icon={theme.active == true ? AccordionlogoBlack : Accordionlogo}></AccrordionImg>
            </LinkMobButton>
        </ButtonBlock>
    )
}