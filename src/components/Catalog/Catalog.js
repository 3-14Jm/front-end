import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import download from "../../assets/download.jpg"
import {useEffect, useState} from "react";
import {ItemPage} from "../ItemPage/ItemPage";
import axios from "axios";
import Hipnosis from "react-cssfx-loading/lib/Hypnosis";


export function Catalog() {

    const [items, update] = useState(null);
    const [view, setView] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8080/pots`)
            .then((result) => {
                update(result.data)
            });
    }, []);

    function updateItems(name, order,input) {
        console.log(name, order)
        axios.get('http://localhost:8080/pots/param', {
            params:
                {
                    name: name,
                    order: order,
                }
        }).then((result) => {
            console.log(result.data)
            filterInput(result.data, input)
        });
    }

    function filterInput(array, input) {
        update(array.filter(item => item.name.search(input.value) !== -1));
    }

    function toggleView(props) {
        setView(props);
    }

    function returnItems(items) {
        function createImage() {
            return download;
        }

        if (items)
            return <>
                <Wrapper>
                    {items.map(item => (
                        <CatalogItem key={item.name} name={item.name}
                                     image={createImage(item.name)} text={item.description}
                                     function={toggleView}/>))}
                </Wrapper>
            </>
        return <>
            <Wrapper style={{padding: "300px"}}>
                <Hipnosis color="lightgreen" width="300px" height="300px" duration="2s"/>
            </Wrapper>

        </>
    }

    if (view == null)
        return (returnItems(items))
    return (
        <>
            <ItemPage item={view}/>
        </>
    )
}