import {GlobalWrapper, FilterSelector, LabelText, ApplyButton, FilterWrapper, HorLine} from "./Filter.styles";
import {LogoText, Nav, NavItem, NavWrapper, Search, Wrapper} from "../Header/Header.styles";
import {useState} from "react";
import {Link} from "react-router-dom";

export function Filter(props) {
    const [name, changeName] = useState("null");
    const [order, changeOrder] = useState("0");


    function handleName(nameSelector) {
        changeName(nameSelector.target.value);
    }

    function handleOrder(orderSelector) {
        changeOrder(orderSelector.target.value);
    }

    function updateItems() {
        const input = document.getElementById("search_input");
        props.function(name, order,input);
    }

    return (
        <>
            <Wrapper>
                <LogoText>IPot shop</LogoText>
                <Nav>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog"
                          style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                <div style={{width: '200px'}}/>
            </Wrapper>
            <GlobalWrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector id="name" onChange={handleName}>
                        <option value="null">Choose filter</option>
                        <option value="name">Name</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector id="order" onChange={handleOrder}>
                        <option value="null">Choose order</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton onClick={updateItems}>Apply</ApplyButton>
            </GlobalWrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </>
    );
}