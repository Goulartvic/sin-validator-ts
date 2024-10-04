import { feedbackVariant, feedbackVisibility, ValidatorFeedbackContainer,  } from "./ValidatorFeedback.styles";

interface ValidatorFeedbackProps {
    text: string;
    variant: feedbackVariant;
    visibility: feedbackVisibility
}

export function ValidatorFeedback({ text, variant, visibility }: ValidatorFeedbackProps) {
    return (
        <ValidatorFeedbackContainer 
            visibility={visibility} 
            variant={variant}>
                {text}
        </ValidatorFeedbackContainer>
    )
}