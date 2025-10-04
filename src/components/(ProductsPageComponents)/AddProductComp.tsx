import { useState } from "react"
import ModalComp from "../ModalComp";
import AddProductCompForm from "./AddProductCompFormModal";
import { MdInventory2 } from "react-icons/md";
// import type { produtoProps } from "../../types/ProdutoType";

type buttonProps = "Nome" | "Categoria";

interface AddProductCompProps {
    setProdutoNome: React.Dispatch<React.SetStateAction<string>>,
    setProdutoCategoria: React.Dispatch<React.SetStateAction<string>>
    // setProdutos: React.Dispatch<React.SetStateAction<produtoProps[]>>,
}

export default function AddProductComp({ setProdutoNome, setProdutoCategoria }: AddProductCompProps) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [toggleBtn, settoggleBtn] = useState<buttonProps>("Nome");
    const [inputValue, setInputValue] = useState<string>("");

    // const [produtoNome, setProdutoNome] = useState<string>('');
    // const [produtoCategoria, setProdutoCategoria] = useState<string>('');

    const handleCloseModal = () => {
        setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
    }

    const handletoggleBtn = () => {
        if(toggleBtn == "Nome") {
            settoggleBtn("Categoria");
            
        } else {
            settoggleBtn("Nome");
            
        }

        setProdutoCategoria("");
        setProdutoNome("");
        setInputValue("");


        // toggleBtn === "Nome" ? settoggleBtn("Categoria") : settoggleBtn("Nome");
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setInputValue(value);
        
        // if(toggleBtn == "Nome") {
        //     setProdutoNome(inputValue);
        // } else {
        //     setProdutoCategoria(inputValue)
        // }

        toggleBtn == "Nome" ? setProdutoNome(value) : setProdutoCategoria(value);
    }

    // const handleSearchProductByName = (nome: string) => {
    //     setProdutoNome(nome);
    // }

    // const handleSearchProductByCategory = (categoria: string) => {
    //     setProdutoCategoria(categoria)
    // }

    return (
        <div className="flex items-stretch gap-x-2 mb-6">
            <div className="flex items-center justify-between border-2 border-[#c0c2c5] group focus-within:border-[#2F80ED] rounded-lg bg-white text-[#111827] w-full focus:outline-none duration-200 ease-in-out">
                {/* <input
                    type="text"
                    placeholder="Buscar produto..."
                    className="focus:outline-none w-full group px-4 py-2"
                    onChange={(e) => {
                        toggleBtn === "Nome" ? setProdutoNome(e.target.value) : setProdutoCategoria(e.target.value)
                    }}
                /> */}
                <input
                    type="text"
                    placeholder="Buscar produto..."
                    className="focus:outline-none w-full group px-4 py-2"
                    onChange={handleInputChange}
                    value={inputValue}
                />
                <button onClick={handletoggleBtn} className="text-[#2F80ED] cursor-pointer border-l-2 border-transparent items-center flex h-full px-4 hover:bg-[#2F80ED] hover:text-white group-focus-within:border-[#2F80ED] duration-75 ease-in-out rounded-r-lg hover:outline-2 hover:outline-[#2F80ED]">{toggleBtn}</button>
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