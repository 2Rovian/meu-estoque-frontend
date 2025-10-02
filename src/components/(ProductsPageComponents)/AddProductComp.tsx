import { useState } from "react"
import ModalComp from "../ModalComp";
import AddProductCompForm from "./AddProductCompFormModal";


export default function AddProductComp() {

    const[ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
    }

    return (
        <div className="flex justify-between items-center mb-6">
            <input
                type="text"
                placeholder="Buscar produto..."
                className="px-4 py-2 border-2 border-[#c0c2c5] focus:border-[#2F80ED] rounded-lg w-1/3 bg-white text-[#111827] focus:outline-none duration-200 ease-in-out
                "
            />
            <button onClick={() => setIsModalOpen(true)} className="bg-[#2F80ED] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#1C64D1] shadow duration-200 ease-in-out">
                Adicionar Produto
            </button>

            {isModalOpen && 
            <ModalComp handleCloseModal={handleCloseModal}>
                <AddProductCompForm />
            </ModalComp>}
            
        </div>
    )
}