import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalComp from "../ModalComp";
import TabelProductsCompDeleteModal from "./TabelProductsCompDeleteModal";
import TabelProductsCompEditModal from "./TabelProductsCompEditModal";

export interface produtoProps {
    id: number;
    name: string;
    category: string;
    quantity: number;
    price: number
}

export default function TabelProductsComp() {

    const [produtos, setProdutos] = useState<produtoProps[]>([]);
    const [produtoDeletado, setProdutoDeletado] = useState<produtoProps>();
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);

    const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
    const [produtoEditado, setProdutoEditado] = useState<produtoProps>();

    useEffect(() => {
        const handleFetchProdutos = async () => {
            const response = await fetch("http://localhost:8080/api/produtos");
            const produtosData = await response.json();
            setProdutos(produtosData);
        }

        handleFetchProdutos()
    }, []);

    const tableHeadNames = [
        'ID', 'Nome', 'Categoria', 'Quantidade', 'Preço (R$)', 'Ações'
    ];

    const handleOpenDeleteModal = (produto: produtoProps) => {
        setIsModalDeleteOpen(true);
        setProdutoDeletado(produto);
    }

    const handleCloseDeleteModal = () => {
        setIsModalDeleteOpen(false);
    }

    const handleOpenEditModal = (produto: produtoProps) => {
        setIsModalEditOpen(true);
        setProdutoEditado(produto);
    }

    const handleCloseEditModal = () => {
        setIsModalEditOpen(false);
    }

    return (
        <div className="overflow-x-auto shadow rounded-lg bg-white border-2 border-[#c0c2c5]">
            <table className="w-full">
                <thead className="bg-gray-100 text-[#111827]">
                    <tr>
                        {tableHeadNames.map((thItem) =>
                            <th key={thItem} className={`px-6 py-3 ${thItem == 'Ações' ? "text-center" : "text-left"}`}>{thItem}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id} className="border-t border-[#c0c2c5]">
                            <td className="px-6 py-3">
                                {produto.id}
                            </td>
                            <td className="px-6 py-3">
                                {produto.name}
                            </td>
                            <td className="px-6 py-3">
                                {produto.category || "Sem Categoria"}
                            </td>
                            <td className="px-6 py-3">
                                {produto.quantity}
                            </td>

                            <td className="px-6 py-3">
                                {produto.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-3 text-center">
                                <div className="flex justify-center gap-2">
                                    <button onClick={() => handleOpenEditModal(produto)} className="bg-[#2F80ED] text-white px-6 py-1 rounded cursor-pointer hover:bg-[#1C64D1] duration-200 ease-in-out">
                                        Editar
                                    </button>
                                    <button onClick={() => handleOpenDeleteModal(produto)} className="bg-white border border-[#c0c2c5] text-[#111827] px-3 py-1 rounded cursor-pointer hover:bg-[#d12424] hover:text-white duration-200 ease-in-out">
                                        <FaRegTrashAlt />
                                    </button>


                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalDeleteOpen && (
                <ModalComp handleCloseModal={handleCloseDeleteModal}>
                    <TabelProductsCompDeleteModal
                        produto={produtoDeletado!}
                        handleCloseModal={handleCloseDeleteModal}
                    />
                </ModalComp>
            )}
            {isModalEditOpen && (
                <ModalComp handleCloseModal={handleCloseEditModal}>
                    <p className="text-lg mb-2">Editando "<span className="font-semibold">{produtoEditado?.name}</span>" </p>
                    <TabelProductsCompEditModal
                        produto={produtoEditado!}
                        handleCloseModal={handleCloseEditModal}
                    />
                </ModalComp>
            )}

        </div>
    )
}