import React, { useEffect, useState } from "react";
import Title from '../Title';
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const items = [
    { id: 1, image:"http://placekitten.com/100/100", categoria:'smokes',title:"Gatito 1" },
    { id: 2, image:"http://placekitten.com/200/200", categoria:'pods',title:"Gatito 2" },
    { id: 3, image:"http://placekitten.com/300/300", categoria:'resistencias',title:"Gatito 3" },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(items => items.categoria === categoriaId)));
        } else{
            getData.then(res => setData(res) );
        }
    }, [categoriaId])

    
    return (
        <>
            <Title />
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;