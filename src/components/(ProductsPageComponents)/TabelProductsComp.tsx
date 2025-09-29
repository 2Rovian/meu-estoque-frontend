import { useState } from "react";

export default function TabelProductsComp() {
    const [produtos] = useState([
        { id: 1, nome: "Notebook", categoria: "Eletrônicos", quantidade: 12, preco: 3500.00 },
        { id: 2, nome: "Cadeira Gamer", categoria: "Móveis", quantidade: 5, preco: 1200.00 },
        { id: 3, nome: "Teclado Mecânico", categoria: "Acessórios", quantidade: 20, preco: 450.00 },
    ]);

    const tableHeadNames = [
        'ID', 'Nome', 'Categoria', 'Quantidade', 'Preço (R$)', 'Ações'
    ]

    return (
        <div className="overflow-x-auto shadow rounded-lg bg-white border-2 border-[#c0c2c5]">
            <table className="w-full table-auto">
                <thead className="bg-gray-100 text-[#111827]">
                    <tr>
                        {tableHeadNames.map((thItem) => 
                            <th className={`px-6 py-3 ${thItem == 'Ações' ? "text-center" : "text-left"}`}>{thItem}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id} className="border-t border-[#c0c2c5]">
                            <td className="px-6 py-3">{produto.id}</td>
                            <td className="px-6 py-3">{produto.nome}</td>
                            <td className="px-6 py-3">{produto.categoria}</td>
                            <td className="px-6 py-3">{produto.quantidade}</td>
                            <td className="px-6 py-3">R$ {produto.preco.toFixed(2)}</td>
                            <td className="px-6 py-3 text-center space-x-2">
                                <button className="bg-[#2F80ED] text-white px-3 py-1 rounded hover:bg-[#1C64D1] duration-200 ease-in-out">
                                    Editar
                                </button>
                                <button className="bg-white border border-[#c0c2c5] text-[#111827] hover:text-white px-3 py-1 rounded hover:bg-[#d12424] duration-200 ease-in-out">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}