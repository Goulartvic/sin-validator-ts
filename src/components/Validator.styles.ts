import { styled } from 'styled-components'

export const ValidatorContainer = styled.div`
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    main {
        width: 25%;
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

    form span {
        margin-top: 0.5rem;
        display: block;
        font-size: 0.875rem;
        color: var(--blue-800);
        line-height: 1.2;
    }

    form textarea {
        width: 100%;
        margin-top: 0.25rem;
        resize: none;
        height: 2.25rem;
        padding: 0.5rem;
        border-radius: 8px;
        color: var(--blue-800);
        line-height: 1.2;
        border-color: var(--blue-800);
    }

    Button {
        margin-top: 6rem;
    }
`