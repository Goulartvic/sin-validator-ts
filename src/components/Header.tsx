import electiveLogo from '../assets/elective_logo.svg'
import { HeaderContainer } from './Header.styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={electiveLogo} alt='Ignite Logo'/>
        </HeaderContainer>
    )
}