import { useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { useEffect } from 'react';

const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartVisible, setCartVisible] = useState(false);

    function calcTotalPrice() {
        let totalPrice = 0;
        cart.forEach(item => totalPrice += item.price * item.quantity);
        setTotalPrice(totalPrice);

        return totalPrice;
    }

    useEffect(() => {
        calcTotalPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    function addProduct(product) {
        const sameProduct = cart.find(item => item.id === product.id);

        if (sameProduct !== undefined) {
            ++sameProduct.quantity;
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        };

        calcTotalPrice();
    };

    function removeProduct(id) {
        const product = cart.find(item => item.id === id);

        if (product !== undefined) {
            --product.quantity;
            if (product.quantity === 0) {
                setCart(cart.filter(product => product.id !== id))
            };
        };

        calcTotalPrice();
    };

    return (
        <ShoppingCartContext.Provider value={{
            cart,
            setCart,
            addProduct,
            removeProduct,
            cartVisible,
            setCartVisible,
            totalPrice,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider