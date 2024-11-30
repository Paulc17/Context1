import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategory from './components/Category/Category';
import CartProvider from "./components/Cart/CartContext"; 
import CartPage from './components/Cart/Cart';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <CartProvider>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/products' element={<ProductsPage />} />
                        <Route path='/products/:productId' element={<ItemDetail />} />
                        <Route path='/category/:categoryId' element={<ProductsCategory />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/Cart' element={<CartPage />} />
                    </Routes>
                    <FooterComponent />
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

