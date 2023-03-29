import React, { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";

const formBase = {
    name: '',
    email: '',
    telephone: '',
    date: Date.now(),
};

const ContactForm = () => {
    const [form, setForm] = useState(formBase);

    const [id, setId] = useState();

    const { cart, totalPrice } = useCartContext()

    const submitHandler = (ev) => {
        ev.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, 'orders');

        const orders = {
            buyer: form,
            items : cart.map(product => ({id: product.id, price: product.price, title: product.title, cantidad: product.quantity})),
            total: totalPrice()
        }

        addDoc(contactFormCollection, orders)
            .then((snapshot) => {
                setForm(formBase)
                setId(snapshot.id)
            });
    }

    const inputChangeHandler = (ev) => {
        const {name, value} = ev.target;
        setForm({...form, [name]: value});
    }

    return (
        <div>
            {typeof id !== 'undefined' ? (
                <p>Su compra se ha registrado con el id: {id}</p>
            ) : (
                ''
            )}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input
                        name="telephone"
                        id="telephone"
                        value={form.telephone}
                        onChange={inputChangeHandler}
                    ></input>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm;