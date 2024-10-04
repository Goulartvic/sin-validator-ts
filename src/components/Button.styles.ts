import styled, { css } from 'styled-components'

export type buttonVariant = 'primary' | 'secondary' | 'disabled'

interface ButtonContainerProps {
    variant: buttonVariant;
}

const buttonColorVariant = {
    primary: '--blue-800',
    secondary: '--orange-500',
    disabled: '--gray-700'
}

const buttonHoverColorVariant = {
    primary: '--orange-500',
    secondary: '--orange-500',
    disabled: '--gray-700'
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 3rem;
    padding: 1rem;
    border-radius: 10px;
    color: var(--white);
    border: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    
    transition: background-color 0.1s;

    cursor: pointer;

    ${props => {
        return css`
            background: var(${buttonColorVariant[props.variant]});

            &:hover {
                background: var(${buttonHoverColorVariant[props.variant]});
            }
        `
    }}
`