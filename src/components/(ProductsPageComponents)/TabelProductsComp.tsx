import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiCheckFill, RiCloseFill } from "react-icons/ri";

interface produtoProps {
    id: number;
    name: string;
    category: string;
    quantity: number;
    price: number
}

export default function TabelProductsComp() {

    const [produtos, setProdutos] = useState<produtoProps[]>([]);

    useEffect(() => {
        const handleFetchProdutos = async () => {
            const response = await fetch("http://localhost:8080/api/produtos");
            const produtosData = await response.json();
            setProdutos(produtosData);
        }

        handleFetchProdutos()
    }, []);

    const [editRow, setEditRow] = useState<produtoProps[]>([]);

    const tableHeadNames = [
        'ID', 'Nome', 'Categoria', 'Quantidade', 'Preço (R$)', 'Ações'
    ];

    const handleAddEditRow = (produto: produtoProps) => {
        const novoProduto: produtoProps = {
            category: produto.category,
            id: produto.id,
            name: produto.name,
            price: produto.price,
            quantity: produto.quantity
        }
        setEditRow([...editRow, novoProduto])
    }

    const handleDeleteEditRow = (produto: produtoProps) => {
        setEditRow(editRow.filter((row) => row.id !== produto.id))
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
                                {editRow.some((item) => item.id == produto.id) ? (
                                    <>
                                        <input type="text"
                                            className="px-1 py-1 border-2 border-[#c0c2c5] focus:border-[#2F80ED] rounded-lg w-full sm:w-[80%] md:w-[70%] bg-white text-[#111827] focus:outline-none duration-200 ease-in-out text-center"
                                            placeholder={produto.name}
                                        />
                                    </>) :
                                    (<>{produto.name}</>)
                                }

                            </td>
                            <td className="px-6 py-3">
                                {editRow.some((item) => item.id == produto.id) ? (<>
                                    <input type="text"
                                        className="px-1 py-1 border-2 border-[#c0c2c5] focus:border-[#2F80ED] rounded-lg w-full sm:w-[80%] md:w-[70%] bg-white text-[#111827] focus:outline-none duration-200 ease-in-out text-center"
                                        placeholder={produto.category || "Sem categoria"}
                                    />
                                </>) : (<>{produto.category || "Sem Categoria"}</>)
                                }

                            </td>
                            <td className="px-6 py-3">
                                {editRow.some((item) => item.id == produto.id) ? (<>
                                    <input type="text"
                                        className="px-1 py-1 border-2 border-[#c0c2c5] focus:border-[#2F80ED] rounded-lg w-full sm:w-[80%] md:w-[70%] bg-white text-[#111827] focus:outline-none duration-200 ease-in-out text-center"
                                        placeholder={(produto.quantity).toString()}
                                    />
                                </>) : (<>{produto.quantity}</>)
                                }
                            </td>

                            <td className="px-6 py-3">
                                {editRow.some((item) => item.id == produto.id) ? (<>
                                    <input type="number"
                                        className="px-1 py-1 border-2 border-[#c0c2c5] focus:border-[#2F80ED] rounded-lg w-full sm:w-[80%] md:w-[70%] bg-white text-[#111827] focus:outline-none duration-200 ease-in-out text-center"
                                        placeholder={(produto.price.toFixed(2)).toString()}
                                    />
                                </>) : (<>{produto.price.toFixed(2)}</>)

                                }
                            </td>
                            <td className="px-6 py-3 text-center">
                                <div className="flex justify-center gap-2">
                                    {editRow.some((item) => item.id == produto.id) ? (<>
                                        <button className="bg-[#2F80ED] text-white px-6 py-1 text-xl rounded cursor-pointer hover:bg-[#1C64D1] duration-200 ease-in-out">
                                            <RiCheckFill />

                                        </button>

                                        <button onClick={() => handleDeleteEditRow(produto)} className="bg-white border border-[#c0c2c5] text-[#111827] px-3 py-1 text-xl rounded cursor-pointer hover:bg-[#d12424] hover:text-white duration-200 ease-in-out">
                                            <RiCloseFill />

                                        </button>

                                    </>) : (<>
                                        <button onClick={() => handleAddEditRow(produto)} className="bg-[#2F80ED] text-white px-6 py-1 rounded cursor-pointer hover:bg-[#1C64D1] duration-200 ease-in-out">
                                            Editar
                                        </button>
                                        <button className="bg-white border border-[#c0c2c5] text-[#111827] px-3 py-1 rounded cursor-pointer hover:bg-[#d12424] hover:text-white duration-200 ease-in-out">
                                            <FaRegTrashAlt />
                                        </button>
                                    </>)
                                        
                                    }

                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}