import axios from "axios";
import toast from "react-hot-toast";

interface useEditProduct {
    handleCloseModal: () => void,
    produtoId: number,
    name: string,
    category: string,
    quantity: number,
    price: number
}

export default function useEditProduct({
    handleCloseModal, produtoId, name, category, quantity, price
}: useEditProduct) {

    const handleEditProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/produtos/${produtoId}`, {
                name,
                category,
                quantity,
                price
            });
            toast.success("Produto editado com sucesso");
            handleCloseModal();
        } catch (err) {
            console.error(err);
            toast.error("Erro ao editar produto")
        }
    };

    return { handleEditProduct }
}