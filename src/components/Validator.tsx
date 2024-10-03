import { Button } from "./Button";
import { ValidatorContainer } from "./Validator.styles";

export function Validator() {
    return (
        <ValidatorContainer>
            <main>
                <header>
                    <strong>Validate your Social Insurance Number (SIN)</strong>
                    <span>This will help us verify your identity to ensure eligibility for our Learn Now, Pay Later program.</span>
                </header>
                <form action="">
                    <span>SOCIAL INSURANCE NUMBER (SIN)</span>
                    <textarea
                        name='sin_input'
                        placeholder="Enter your 9-digit Social Insurance Number (SIN)"
                    />
                </form>
                <Button text="Check Eligibility"/>
            </main>
        </ValidatorContainer>
    )
}