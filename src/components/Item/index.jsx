import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="item">
            <img src={info.image} alt="img" />
            <p>{info.title}</p>
        </Link>
    )
}

export default Item;