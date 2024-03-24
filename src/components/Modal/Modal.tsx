import { animated, useTransition } from '@react-spring/web';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';

const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{ modalBgColor: string, modalBorder: string }>`
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 375px;
        height: 430px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border:  ${props => props.modalBorder};
        margin-top: -10px;
        position: relative;
        outline: none;
        transition: all .3s ease-in-out;
        @media (max-width: 500px) {
            width: 100%;
            border-radius: 0px;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
        }
    }
`


const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay)`
    &[data-reach-dialog-overlay] {
        z-index: 1;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:flex;
        align-items: center;
        justify-content: center; 
        transition: background-color 3s;
        background-color: rgba(0,0,0,.45);
        @media (max-width: 500px) {
            align-items: flex-end;
        }
    }
`

export function Modal(
        isOpen: boolean,
        onDismiss?: () => void,
        children?: React.ReactNode,
        modalBgColor?: string,
        modalBorder?: string,
) {    
        const transitions = useTransition(isOpen, {
            from: { opacity: 0, transform: "translateY(100px)" },
            enter: { opacity: 1, transform: "translateY(0px)" },
        });
    
        return (
            <>
                {transitions((styles, item) => (
                    item && (
                        <StyledDialogOvelay
                            style={styles}
                            isOpen={isOpen}
                            onDismiss={onDismiss}
                            key={null}
                        >
                            <StyledDialogContent modalBgColor={modalBgColor? modalBgColor : ""} modalBorder={modalBorder? modalBorder : ""}>
                                {children}
                            </StyledDialogContent>
                        </StyledDialogOvelay>
                    )
                ))}
            </>
        );
    }