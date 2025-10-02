import axios from "axios";
import toast from "react-hot-toast";

interface useDeleteProductProps{
    handleCloseModal: () => void,
    produtoId: number
}

export default function useDeleteProduct({handleCloseModal, produtoId}: useDeleteProductProps ){

    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/produtos/${produtoId}`);
            toast.success("Produto excluído com sucesso");

        } catch (error) {
            toast.error("Erro ao excluir produto");
            console.error(error);
        } finally {
            handleCloseModal();
        }
    };
    
    return {
        handleDeleteProduct
    }
}