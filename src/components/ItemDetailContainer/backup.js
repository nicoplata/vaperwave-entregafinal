import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const items = [
    { id: 1, price: 100, image:"http://placekitten.com/100/100", categoria:'smokes',title:"Gatito 1" },
    { id: 2, price: 100, image:"http://placekitten.com/200/200", categoria:'pods',title:"Gatito 2" },
    { id: 3, price: 100, image:"http://placekitten.com/300/300", categoria:'resistencias',title:"Gatito 3" },
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items)
            }, 1000)
        })
        if (detalleId) {
            getData.then(res => setData(res.find(items => items.id === parseInt(detalleId))))
        } else {
            getData.then(res => setData(res))
        }
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer; 