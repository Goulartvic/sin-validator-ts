import styled from 'styled-components'

export const ValidatorContainer = styled.div`
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    main {
        width: 32.5%;
        background: var(--white);
        gap: 1rem;
        padding: 2.5rem;
        border-radius: 20px;
        border: 1px solid var(--gray-100);
    }

    header {
        width: 100%;
    }

    strong {
        display: block;
        font-size: 2rem;
        color: var(--blue-800);
        line-height: 1.2;
    }

    header span {
        margin-top: 0.5rem;
        display: block;
        font-size: 0.875rem;
        color: var(--orange-500);
        line-height: 1.2;
    }

    form {
        margin-top: 1.5rem;
    }

    form a {
        text-decoration: none;
    }

    form span {
        margin-top: 0.5rem;
        display: block;
        font-size: 0.875rem;
        color: var(--blue-800);
        line-height: 1.2;
    }

    form input {
        width: 100%;
        margin-top: 0.5em;
        resize: none;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        border-width: 1px;
        color: var(--blue-800);
        line-height: 1.2;
        border-color: var(--blue-800);
    }

    form input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    Button {
        margin-top: 6rem;
    }

    footer {
        margin-top: 1.5rem;
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        text-decoration: underline;
    }

    footer a {
        color: var(--blue-800);
    }
`