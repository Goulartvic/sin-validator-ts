import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./Button";
import { ValidatorContainer } from "./Validator.styles";

export function SINNumberValidator() {

    const [socialNumber, setSocialNumber] = useState("");

    const [formattedSocialNumber, setFormattedSocialNumber] = useState("");

    function formatSocialNumber(inputValue: string) {
        const digits = inputValue.replace(/\D/g, '');
        const parts = [
          digits.slice(0, 3),
          digits.slice(3, 6),
          digits.slice(6, 9)
        ];
        return parts.filter(Boolean).join('-');
    }

    function handleValidateSINNumber(event: FormEvent) : boolean {
        event.preventDefault()

        console.log(socialNumber)

        const socialNumberSum = socialNumber.split('').reduce((accumulator, value, index) => {
            console.log(accumulator)
            let digit = parseInt(value, 10);
            if (index % 2 === 1) {
                digit *= 2;
              if (digit > 9) digit = Math.floor(digit / 10) + (digit % 10);
            }
            return accumulator + digit;
          }, 0);

        console.log(socialNumberSum % 10 === 0);
        return socialNumberSum % 10 === 0;
    }

    function handleSocialNumberChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        const inputValue = event.target.value.replace(/\D/g, '').slice(0, 9);
        setSocialNumber(inputValue)
        setFormattedSocialNumber(formatSocialNumber(inputValue))

        console.log(socialNumber)
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
                    <Button 
                        text="Check Eligibility"
                        disabled={!isInputValid}
                    />
                </form>
            </main>
        </ValidatorContainer>
    )
}