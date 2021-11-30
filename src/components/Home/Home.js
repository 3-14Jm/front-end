import {
    Button,
    ButtonWrapper,
    HeroWrapper,
    Image,
    ImageText, InfoText, InfoWrapper, ItemsText,
    Label,
    TextWrapper,
} from "./Home.styles";
import VaseShop from "../../assets/hero.jpg"



export function Home() {
    return (
        <div>
            <HeroWrapper>
                <Image src={VaseShop}/>
                <TextWrapper>
                    <Label>Our pots are the best</Label>
                    <ImageText>Our pots were designed to make your everyday happier and inspire your own creativity. Whether you fill a room with bouquets, put a single flower in a vase, or let our bowls and vases stand on their own. With our range, even the prices are beautiful.</ImageText>
                </TextWrapper>
            </HeroWrapper>
            <InfoWrapper>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </InfoText>
            </InfoWrapper>
        </div>
    );
}