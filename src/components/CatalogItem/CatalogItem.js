import {Image, Wrapper, Label, TextWrapper, Button} from './CatalogItem.styles'

export function CatalogItem(props) {
    return (
        <Wrapper>
            <Image src={props.image}/>
            <TextWrapper>
                <Label>{props.name}</Label>
            </TextWrapper>
            <Button onClick={() => props.function(props)}>View more</Button>
        </Wrapper>
    );
}