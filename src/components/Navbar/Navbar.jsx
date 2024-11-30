import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext'; // Importa el contexto del carrito
import { useState } from 'react';

export default function Navbar() {
    const { cart, clearCart } = useCart(); // Accede al carrito y la función para vaciarlo
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calcula la cantidad total de productos
    const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar la visibilidad del menú del carrito

    const toggleCartMenu = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-100">
            <ul className="flex">
                <li className="mx-[50px] text-[17px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mx-[50px] text-[17px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/products">Productos</Link>
                </li>
                <li className="mx-[50px] text-[17px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/about">Acerca de</Link>
                </li>
                <li className="mx-[50px] text-[17px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>

            {/* Carrito */}
            <div className="relative">
                <button onClick={toggleCartMenu} className="text-[rgb(45,58,75)] hover:text-[rgb(255,225,21)]">
                    🛒 Carrito ({totalItems})
                </button>
                {/* Menú desplegable del carrito */}
                {isCartOpen && (
                    <div className="absolute right-0 mt-2 bg-white shadow-md border p-4 w-64">
                        <h3 className="font-semibold mb-4">Productos en el carrito</h3>
                        <ul className="space-y-2">
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between">
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>${item.price * item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <button 
                                onClick={clearCart}
                                className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Vaciar carrito
                            </button>
                            <Link 
                                to="/cart"
                                className="block text-center mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Ver carrito
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

