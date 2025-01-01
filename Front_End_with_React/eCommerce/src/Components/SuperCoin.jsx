import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SuperCoins = () => {
    const [superCoin, setSuperCoins] = useState(0);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, items) => total +items.price * items.quantity, 0);
    
    const calculateSuperCoins = () => {
        if (totalAmount >= 300) {
            return 30;
        }
        else if (totalAmount >= 200) {
            return 20;
        }
        else if (totalAmount >= 100) {
            return 10;
        }
        else {
            return 0;
        }
    }
    
    useEffect(() => {
        const coins = calculateSuperCoins();
        setSuperCoins(coins);
    }, [cartItems]);
    return (
        <>
            <div className = "super-coins">
                <span> You will earn {superCoin} Super Coins</span>
            </div>
        </>
    )
}

export default SuperCoins;