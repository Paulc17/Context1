import React, { useEffect, useState } from 'react';
import { useCart } from "../Cart/CartContext";

import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const { addToCart } = useCart();

    // SETEO EL LOADING EN TRUE
    const [loading, setLoading] = useState(true);

     // CARGO LA DATA DE LA MOCK
     useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    // ESTADO PARA LA CANTIDAD
    const [quantity, setQuantity] = useState(1);

    // DOS FUNCIONES PARA INCREMENTAR Y DECREMENTAR 
    //La función decrementQuantity se encarga de disminuir la cantidad de un producto seleccionado, siempre y cuando la cantidad actual sea mayor que 1.
    const decrementQuantity = () => {
        if(quantity > 1 ){ 
            setQuantity(quantity - 1)
        }
    }
    // La función incrementQuantity se encarga de incrementar la cantidad de un producto seleccionado, siempre y cuando la cantidad actual sea menor que el stock disponible del producto. 
    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }

    // PRECIO TOTAL
    const precioTotal = product.price * quantity;


    // SIN HAY PRODUCT CARGA LOADING O PRODUCT NOT FOUND
    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[1170px]'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]'/>
                </div>
                <div>
                    <h1 className='text-[45px] font-medium uppercase'>{product.name}</h1>
                    <p className='text-[20px] my-[20px]'>{product.description}</p>
                    
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}</p>
                    <div className='flex'>
                        <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
                    </div>

                    <p className='text-[20px] my-[20px]'>Precio: ${product.price} por unidad</p>

                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>
                    
                    <div className="flex space-x-[10px]">
                        <button className="bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#936d40] flex items-center space-x-[5px]">
                            <span>Comprar</span>
                            <ion-icon name="cash-outline" className="text-[24px]"></ion-icon>
                        </button>
                        <button className="bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#936d40] flex items-center space-x-[5px]" onClick={() => addToCart(product, quantity)}>
                            <span>Agregar al carrito </span>
                        <ion-icon name="cart-outline" className="text-[24px]"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}