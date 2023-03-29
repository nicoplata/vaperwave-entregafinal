import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [info, setData] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection, where('id', '==', detalleId))
        getDocs(q).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                id: snapshot.id,
                ...snapshot.data(),
            }));
            const item = docs.find((item) => item.id === detalleId);
            setData(item);
        });        
    }, [detalleId]);

    console.log(info)
    return(
        <>
            <ItemDetail data={info} />
        </>
    );
}

export default ItemDetailContainer;