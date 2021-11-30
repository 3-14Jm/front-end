import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  background: linear-gradient(to right, #66d75a, #9bc897);
  height: 90px;
  width: 100%;
`

export const LogoText = styled.a`
  padding-left: 20px;
  color: white;
  text-decoration: none;
  font-size: 28px;
`

export const NavItem = styled.li`
  margin: 10px 30px;  
  font-size: 22px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  color: white;
  
  &:hover {
    color: green;
    transition: 0.3s;
    transform: translateY(-5px);
  }
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding: 0;
  text-align: center;
  flex: 5;
`

export const NavWrapper = styled.div`
  width: 200px;
  flex: 1;
`

export const Search = styled.input`
  text-decoration: none;
  border: black 1px solid;
  border-radius: 10px;
  color: #c4c4c4;
  padding: 8px 8px;
  margin: 0;
`