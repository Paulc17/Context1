import React, { createContext, useContext, useState, useEffect } from "react";

// Crear contexto para el carrito
const CartContext = createContext();

// Hook para usar el carrito
export const useCart = () => {
    return useContext(CartContext);
};

// Componente de proveedor del carrito
const CartProvider = ({ children }) => {
    // Leer carrito desde localStorage al inicializar
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Sincronizar carrito con localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Calcular el precio total
    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            if (typeof item.price !== "number" || typeof item.quantity !== "number") {
                console.error("Precio o cantidad no son números válidos", item);
                return total; 
            }
            return total + item.price * item.quantity;
        }, 0);
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


