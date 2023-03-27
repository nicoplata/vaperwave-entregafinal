import './Item.css';

import { Link } from "react-router-dom";
import React, {useContext} from "react";

const Item = ({info}) => {

    return (
        <Link to={`/detalle/${info.id}`} className="item">
            <img src={info.image} alt="img" />
            <p>{info.title}</p>
        </Link>
    )
}

export default Item;