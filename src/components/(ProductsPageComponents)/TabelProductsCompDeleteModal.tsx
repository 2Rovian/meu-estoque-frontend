import axios from "axios";
import type { produtoProps } from "./TabelProductsComp";
import toast from "react-hot-toast";

interface TabelProductsCompDeleteModalProps {
    produto: produtoProps;
    handleCloseModal: () => void;
}

export default function TabelProductsCompDeleteModal({ handleCloseModal, produto }: TabelProductsCompDeleteModalProps) {

    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/produtos/${produto.id}`);
            toast.success("Produto excluído com sucesso");

        } catch (error) {
            toast.error("Erro ao excluir produto");
            console.error(error);
        } finally {
            handleCloseModal();
        }
    };

    return (
        <>
            <h2 className="text-lg font-semibold text-[#111827] mb-4">Excluir Produto</h2>
            <p className="text-sm text-gray-600 mb-6">
                Tem certeza que deseja excluir "{produto.name}"? Essa ação não pode ser desfeita.
            </p>
            <div className="flex justify-end gap-3">
                <button
                    onClick={handleCloseModal}
                    className="px-4 cursor-pointer py-2 rounded border border-[#c0c2c5] text-[#111827]"
                >
                    Cancelar
                </button>
                <button
                    onClick={handleDeleteProduct}
                    className="border border-[#c0c2c5] px-4 py-2 text-xl rounded cursor-pointer bg-[#d12424] hover:bg-red-500 text-white duration-200 ease-in-out"
                >
                    Excluir
                </button>
            </div>
        </>

    )
}