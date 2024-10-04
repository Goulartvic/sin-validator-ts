import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./Button";
import { ValidatorContainer } from "./Validator.styles";
import { ValidatorFeedback } from "./ValidatorFeedback";
import { feedbackVariant, feedbackVisibility } from "./ValidatorFeedback.styles";
import { buttonVariant } from "./Button.styles";

export function SINNumberValidator() {

    const [socialNumber, setSocialNumber] = useState("");

    const [formattedSocialNumber, setFormattedSocialNumber] = useState("");

    const [feedbackVisibility, setFeedbackVisibility] = useState('hidden' as feedbackVisibility);

    const [feedbackStatus, setFeedbackStatus] = useState('success' as feedbackVariant);

    const [feedbackText, setFeedbackText] = useState('');

    const [isResetButtonVisible, setIsResetButtonVisible] = useState(false);

    const [buttonStatus, setButtonStatus] = useState('disabled' as buttonVariant);

    function formatSocialNumber(inputValue: string) {
        const digits = inputValue.replace(/\D/g, '');
        const parts = [
          digits.slice(0, 3),
          digits.slice(3, 6),
          digits.slice(6, 9)
        ];
        return parts.filter(Boolean).join('-');
    }

    function handleValidateSINNumber(event: FormEvent) {
        event.preventDefault();
        
        const isValid = validateSINNumber(socialNumber);
        handleEligibilityStatus(isValid);
    }

    function validateSINNumber(socialNumber: string): boolean {
        const socialNumberSum = socialNumber.split('').reduce((accumulator, value, index) => {
            let digit = parseInt(value, 10);
            if (index % 2 === 1) {
                digit *= 2;
              if (digit > 9) digit = Math.floor(digit / 10) + (digit % 10);
            }
            return accumulator + digit;
          }, 0);
        return socialNumberSum % 10 === 0;
    }

    function handleEligibilityStatus(isValid: boolean) {
        if (isValid) {
            setFeedbackStatus('success');
            setFeedbackText("✅ Your SIN is valid! You're one step closer to accessing flexible payment options.");
            setIsResetButtonVisible(true);
            setButtonStatus('secondary')
        } else {
            setFeedbackStatus('fail');
            setFeedbackText("❌ Invalid SIN. Please check the number and try again.");
        }
        setFeedbackVisibility('visible');
    }

    function handleSocialNumberChange(event: ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value.replace(/\D/g, '').slice(0, 9);
        setSocialNumber(inputValue);
        setFormattedSocialNumber(formatSocialNumber(inputValue));

        if (!(inputValue.length === 9)) {
            setFeedbackVisibility('hidden');
            setIsResetButtonVisible(false);
            setButtonStatus('disabled')
        } else {
            setButtonStatus('primary')
        }
    }

    function handleInputReset() {
        setSocialNumber('');
        setFormattedSocialNumber('');
        setFeedbackVisibility('hidden');
        setIsResetButtonVisible(false);
        setButtonStatus('disabled')
    }

    const isInputValid = socialNumber.length === 9

    return (
        <ValidatorContainer>
            <main>
                <header>
                    <strong>Validate your Social Insurance Number (SIN)</strong>
                    <span>This will help us verify your identity to ensure eligibility for our Learn Now, Pay Later program.</span>
                </header>
                <form 
                    onSubmit={handleValidateSINNumber}
                    action=""
                > 
                    <span>SOCIAL INSURANCE NUMBER (SIN)</span>
                    <input
                        onChange={handleSocialNumberChange}
                        value={formattedSocialNumber}
                        name='sin_input'
                        type="text"
                        maxLength={11}
                        placeholder="Enter your 9-digit Social Insurance Number (SIN)"
                    />
                    <ValidatorFeedback 
                        text={feedbackText}
                        variant={feedbackStatus}
                        visibility={feedbackVisibility}
                    />
                    <Button 
                        variant={buttonStatus}
                        text="Check Eligibility"
                        disabled={!isInputValid}
                    />
                    
                    {isResetButtonVisible ? 
                        <footer>
                            <a 
                                onClick={handleInputReset}
                                href=''
                            >
                                     Check Another SIN Eligibility
                            </a>
                        </footer>
                        :
                        <></>
                    }
                </form>
            </main>
        </ValidatorContainer>
    )
}