import {LogoText, NavItem, Wrapper, Nav} from './Header.styles'
import {Link} from "react-router-dom";


export function Header() {
    return (
        <Wrapper>
            <LogoText>3.14Jm</LogoText>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/about_us" style={{textDecoration: 'none', color: 'black'}}><NavItem>About us</NavItem></Link>
            </Nav>
        </Wrapper>
    );
}


