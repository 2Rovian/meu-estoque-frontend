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
            <div className="flex items-center justify-between border-2 border-[#c0c2c5] group focus-within:border-[#2F80ED] rounded-lg bg-white text-[#111827] w-full focus:outline-none duration-200 ease-in-out">
                <input
                    type="text"
                    placeholder="Buscar produto..."
                    className="focus:outline-none w-full group px-4 py-2"
                />
                <button className="text-[#2F80ED] border-l-2 border-transparent items-center flex h-full px-4 group-focus-within:border-[#2F80ED] duration-200 ease-in-out">Nome</button>
            </div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#2F80ED] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#1C64D1] shadow duration-200 ease-in-out flex items-center whitespace-nowrap"
            >
                <MdInventory2 className="sm:mr-2 shrink-0" />
                <span className="hidden sm:inline">Adicionar Produto</span>
            </button>

            {isModalOpen &&
                <ModalComp handleCloseModal={handleCloseModal}>
                    <AddProductCompForm />
                </ModalComp>}

        </div>
    )
}