import { useState } from "react"
import ModalComp from "../ModalComp";
import AddProductCompForm from "./AddProductCompFormModal";
import { MdInventory2 } from "react-icons/md";

export default function AddProductComp() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
    }

    return (
        <div className="flex items-stretch gap-x-2 mb-6">
            <input
                type="text"
                placeholder="Buscar produto..."
                className="px-4 py-2 border-2 border-[#c0c2c5] focus:border-[#2F80ED] rounded-lg bg-white text-[#111827] w-full focus:outline-none duration-200 ease-in-out 
                "
            />
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#2F80ED] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#1C64D1] shadow duration-200 ease-in-out flex items-center whitespace-nowrap"
            >
                <MdInventory2  className="sm:mr-2 shrink-0" />
                <span className="hidden sm:inline">Adicionar Produto</span>
            </button>

            {isModalOpen &&
                <ModalComp handleCloseModal={handleCloseModal}>
                    <AddProductCompForm />
                </ModalComp>}

        </div>
    )
}