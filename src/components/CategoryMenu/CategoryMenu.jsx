import { Link } from "react-router-dom";

export default function CategoryMenu() {
    return (
        <div className="bg-gray-100 py-4">
            <div className="container mx-auto max-w-[1170px]">
                <h2 className="text-center text-[20px] font-semibold uppercase text-[rgb(45,58,75)] mb-[10px]">
                    ¿Tipo de moto que buscas?
                </h2>
                <ul className="flex justify-center">
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                        <Link to="/category/Naked">Naked</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                        <Link to="/category/Deportiva">Deportiva</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                        <Link to="/category/Scooter">Scooter</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                        <Link to="/category/Super Deportiva">Super Deportiva</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                        <Link to="/category/Enduro">Enduro</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                        <Link to="/category/Adventure">Adventure</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
