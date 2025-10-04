import { useEffect, useState } from "react";
import AddProductComp from "../components/(ProductsPageComponents)/AddProductComp";
import TabelProductsComp from "../components/(ProductsPageComponents)/TabelProductsComp";
import type { produtoProps } from "../types/ProdutoType";

export default function ProductsPage() {

    // const handleSearchProductByName = () => { }
    // const handleSearchProductByCategory = () => { }

    const [produtos, setProdutos] = useState<produtoProps[]>([]);
    const [produtoNome, setProdutoNome] = useState<string>('');
    const [produtoCategoria, setProdutoCategoria] = useState<string>('');

    useEffect(() => {
        const handleFetchProdutos = async () => {
            const response = await fetch("http://localhost:8080/api/produtos");
            const produtosData = await response.json();
            setProdutos(produtosData);
        }

        handleFetchProdutos()
    }, []);

    return (
        <main className="container mx-auto min-h-screen bg-[#F9FAFB] px-4 pt-6">

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#111827]">Produtos</h1>
                <p className="text-[#6B7280]">Gerencie os produtos cadastrados no estoque.</p>
            </div>

            <AddProductComp
                setProdutoNome={setProdutoNome}
                setProdutoCategoria={setProdutoCategoria}
            />

            <TabelProductsComp
                produtos={produtos}
            />

            <div>
                <p>Produto:  {produtoNome}</p>
                <p>Categoria: {produtoCategoria}</p>
            </div>
        </main>
    );

}
