import {Image, InfoText, WrapperAboutUs} from "./AboutUs.styles";
import {Button, Label, TextWrapper, Wrapper} from "../CatalogItem/CatalogItem.styles";

import Maks from "../../assets/Maks.jpg"
import Yarik from  "../../assets/Yaroslav.jpg"
import Mark from "../../assets/Mark.jpg"
import Ostap from "../../assets/Ostap.jpg"
import Vika from "../../assets/Vika.jpg"
import {InfoWrapper} from "../Home/Home.styles";

export function AboutUs() {
    return(
        <WrapperAboutUs>
            <Wrapper>
                <Image  src={Maks}/>
                <TextWrapper>
                    <Label>Maks Demkovych</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Yarik}/>
                <TextWrapper>
                    <Label>Yaroslav Lys</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Mark}/>
                <TextWrapper>
                    <Label>Marko Kruchok</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Ostap}/>
                <TextWrapper>
                    <Label>Ostap Rizhko</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Vika}/>
                <TextWrapper>
                    <Label>Vika Lutsiuk</Label>
                </TextWrapper>
            </Wrapper>
            <InfoWrapper>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </InfoText>
            </InfoWrapper>
        </WrapperAboutUs>

    )
}