import Navbar from '../Navbar/Navbar';

export default function HeaderComponent() {
  const Imagen = "/logo.png";
  
  return (
    <>
      <div className="w-full h-[130px] flex items-center justify-center bg-white">
        <img src={Imagen} alt="logo" className="w-[100px] h-[100px] absolute left-0 ml-2" />
        <Navbar />
      </div>
    </>
  );
}