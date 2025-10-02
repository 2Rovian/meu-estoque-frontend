import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import type { produtoProps } from "./TabelProductsComp";

interface TabelProductsCompEditModalProps {
    produto: produtoProps,
    handleCloseModal: () => void
}

export default function TabelProductsCompEditModal({ produto, handleCloseModal }: TabelProductsCompEditModalProps){

    const [name, setName] = useState<string>(produto.name);
    const [category, setCategory] = useState<string>(produto.category);
    const [quantity, setQuantity] = useState<number>(produto.quantity);
    const [price, setPrice] = useState<number>(produto.price);


    const inputFields = [
        {
            label: 'Nome', inputType: 'text', id: 'name', name: 'name', value: name,
            onChangeInputFunc: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
        },
        {
            label: 'Categoria', inputType: 'text', id: 'category', name: 'category', value: category,
            onChangeInputFunc: (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)
        },
        {
            label: 'Quantidade', inputType: 'number', id: 'quantity', name: 'quantity', value: quantity,
            onChangeInputFunc: (e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))
        },
        {
            label: 'Preço', inputType: 'number', id: 'price', name: 'price', value: price,
            onChangeInputFunc: (e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))
        },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            await axios.put(`http://localhost:8080/api/produtos/${produto.id}`, {
                name,
                category,
                quantity,
                price
            });
            toast.success("Produto editado com sucesso");
            handleCloseModal();
        } catch(err) {
            console.error(err);
            toast.error("Erro ao editar produto")
        }
    };

    const handleClearInputs = () => {
        setCategory("");
        setName("");
        setPrice(0);
        setQuantity(0);
    }

    return (
        <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="space-y-4">
            {inputFields.map((field) =>
                <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-[#111827]">
                        {field.label}
                    </label>
                    <input
                        id={field.id}
                        name={field.name}
                        type={field.inputType}
                        value={field.value}
                        onChange={field.onChangeInputFunc}
                        min={1}
                        maxLength={40}
                        className="mt-1 block w-full rounded-md border-2 border-[#c0c2c5] bg-white px-3 py-2 shadow-sm focus:border-[#2F80ED] sm:text-sm focus:outline-none duration-200 ease-in-out"
                    />
                </div>
            )}

            <div className="flex gap-x-2 justify-end">
                <button type="button" onClick={handleClearInputs} className="bg-white text-[#2F80ED] border border-[#2F80ED] px-6 py-3 rounded-lg shadow hover:bg-[#EBF4FF] cursor-pointer">Descartar</button>
                <button
                    type="submit"
                    className="cursor-pointer bg-[#2F80ED] text-white px-4 py-2 rounded-lg shadow hover:bg-[#1C64D1] duration-200 ease-out"
                >
                    Editar produto
                </button>
            </div>
        </form>
    );
}