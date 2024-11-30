import React, { createContext, useContext, useState } from "react";

// Crear contexto para el carrito
const CartContext = createContext();

// Hook para usar el carrito
export const useCart = () => {
    return useContext(CartContext);
};

// Componente de proveedor del carrito
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (item, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);
    
            if (existingItem) {
                return prevCart.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity, price: item.price }
                        : i
                );
            }
    
            // Agregar nuevo producto al carrito
            return [...prevCart, { ...item, quantity, price: item.price }];
        });
    };
    
    
    
    // Función para eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    // Calcular el precio total
    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            // Verificacion si son dos numeros
            if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
                console.error('Precio o cantidad no son números válidos', item);
                return total; 
            }
            return total + item.price * item.quantity;
        }, 0); // Establece el valor inicial de la acumulación como 0
    };
    

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Exportar CartProvider como exportación por defecto
export default CartProvider;

