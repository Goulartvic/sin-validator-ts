import styled, { css } from "styled-components"

export type feedbackVariant = 'success' | 'fail' 

export type feedbackVisibility = 'hidden' | 'visible' 

interface ValidatorFeedbackContainerProps {
    variant: feedbackVariant;
    visibility: feedbackVisibility;
}

const feedbackBackgroundVariants = {
    success: '--green-200',
    fail: '--red-200'
}

const feedbackFontVariant = {
    success: '--blue-800',
    fail: '--red-800'
}

const feedbackVisibiltyHeight = {
    hidden: 0,
    visible: 'none'
}

export const ValidatorFeedbackContainer = styled.div<ValidatorFeedbackContainerProps>`
    width: 100%;
    font-size: 0.75rem;
    margin-top: 0.125rem;
    border-radius: 2px;
    line-height: 1.6;
    padding-left: 0.5rem;

    ${props => {
        return css`
            background: var(${feedbackBackgroundVariants[props.variant]});
            color: var(${feedbackFontVariant[props.variant]});
            visibility: ${props.visibility};
            max-height: ${feedbackVisibiltyHeight[props.visibility]};
        `
    }}
`