import React, {useState} from "react";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import ItemCount from "../ItemCount";

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true)
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.image} alt="image" />
                <div className="content" >
                    <h1>{data.title}</h1>
                    {
                        goToCart 
                            ? <Link to='/cart'>Finalizar compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail; 