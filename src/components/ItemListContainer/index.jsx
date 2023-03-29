import React, { useEffect, useState } from "react";
import Title from '../Title';
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection)
        if (categoriaId) {
        const q = query(itemsCollection, where('categoria', '==', categoriaId))
        getDocs(q).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                id: snapshot.id,
                ...snapshot.data(),
            }));
            setData(docs);
        });        
        } else {
            getDocs(q).then((snapshotList) =>{
                const docs = snapshotList.docs.map((snapshot) => ({
                    id: snapshot.id,
                    ...snapshot.data(),
                }));
                setData(docs);
            });
        }
    }, [categoriaId]);

    
    return (
        <>
            <Title data={data} />
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;