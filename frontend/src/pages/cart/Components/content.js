import styles from "../Styles/content.module.css"
import React, { useState, useContext } from "react";
import Nav1 from "./navbar";
import { Link } from 'react-router-dom';


const Content = () => {
    // state to store items in the cart
    const [cartItems, setCartItems] = useState([]);

    // function to add an item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // function to remove an item from the cart
    const removeFromCart = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
        setCartItems(updatedCart);
    };

    // calculate total price of items in the cart
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <section id="home">
            <div className={styles.big}>
                <Nav1 />
                <div className={styles.cartcontainer}>
                    <h2>Your Cart</h2>
                    <div className={styles.cartitems}>
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div className={styles.cartitem} key={index}>
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <button onClick={() => removeFromCart(item)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className={styles.cartsummary}>
                        <p>Total: {totalPrice}</p>
                        <div className={styles.buttonContainer} >
                            {
                                <button type="submit" className={styles.button}>
                                    <Link to="/payment" style={{ color: "white", textDecoration: "none" }}> <div className={styles.buttontext}>Checkout</div></Link>

                                </button>
                            }

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Content;
