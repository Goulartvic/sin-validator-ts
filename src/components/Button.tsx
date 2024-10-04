import { ButtonContainer } from "./Button.styles"

interface ButtonProps {
    disabled?: boolean;
    text: string;
}

export function Button({ disabled=false, text }: ButtonProps) {
    return (<ButtonContainer type="submit" disabled={disabled} >{text}</ButtonContainer>)
}