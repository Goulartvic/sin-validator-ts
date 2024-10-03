import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: 100%;
    height: 3rem;
    padding: 1rem;
    border-radius: 10px;
    background: var(--blue-800);
    color: var(--white);
    border: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    
    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        background: var(--orange-500);
    }
`