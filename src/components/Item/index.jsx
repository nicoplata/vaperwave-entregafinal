import './Item.css';

import { Link } from "react-router-dom";
import React from "react";

const Item = ({info}) => {

    return (
        <Link to={`/detalle/${info.id}`} className="item">
            <img src={info.image} alt="img" />
            <p>{info.title}</p>
            <p>${info.price}</p>
        </Link>
    )
}

export default Item;