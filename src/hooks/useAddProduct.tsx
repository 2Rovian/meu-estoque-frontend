import axios from "axios";
import toast from "react-hot-toast";

interface useAddProduct {
    name: string,
    category: string,
    quantity: number,
    price: number
}

export default function useAddProduct({name, category, quantity, price}: useAddProduct) {

    const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !category || !quantity || !price) {
            toast.error("Preencha todos os campos");
            return;
        }
        try {
            await axios.post("http://localhost:8080/api/produtos", {
                name,
                category,
                quantity,
                price
            });
            toast.success("Produto adicionado com sucesso");
        } catch (err) {
            console.error(err);
            toast.error("Erro ao adicionar produto")
        }
    };

    return {
       handleAddProduct
    }
}


