import {Image, Label, Text, TextWrapper, Wrapper, Button} from "./ItemPage.styles";


export function ItemPage(item) {
    return (
        <>
            <Wrapper>
                <Image src={item.item.image}/>
                <TextWrapper>
                    <Label>{item.item.name}</Label>
                    <Text>{item.item.text}</Text>
                    <Button onClick={() => item.item.function(null)}>Go back</Button>
                </TextWrapper>
            </Wrapper>
        </>
    );
}