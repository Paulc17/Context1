import {PulseLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[480px]">
            <PulseLoader color="#2D3A4B" size="20px" />
        </div>
    )
}