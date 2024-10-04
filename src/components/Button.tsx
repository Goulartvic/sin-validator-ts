import { ButtonContainer, buttonVariant } from "./Button.styles"

interface ButtonProps {
    disabled?: boolean;
    text: string;
    variant: buttonVariant;
}

export function Button({ disabled=false, text, variant }: ButtonProps) {
    return (
        <ButtonContainer 
            type="submit" 
            variant={variant}
            disabled={disabled} >
                {text}
            </ButtonContainer>
        )
}