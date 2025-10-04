import { useEffect, useState } from "react";
import AddProductComp from "../components/(ProductsPageComponents)/AddProductComp";
import TabelProductsComp from "../components/(ProductsPageComponents)/TabelProductsComp";
import type { produtoProps } from "../types/ProdutoType";

export default function ProductsPage() {

    const [produtos, setProdutos] = useState<produtoProps[]>([]);
    const [produtoNome, setProdutoNome] = useState<string>('');
    const [produtoCategoria, setProdutoCategoria] = useState<string>('');

    useEffect(() => {
        const handleFetchProdutos = async () => {
            const response = await fetch("http://localhost:8080/api/produtos");
            const produtosData = await response.json();
            setProdutos(produtosData);
        }


        const handleFetchProdutosByName = async (produtoNome: string) => {
            const response = await fetch(`http://localhost:8080/api/produtos?nome=${produtoNome}`);
            const produtosData = await response.json();
            setProdutos(produtosData);
        }

        const handleFetchProdutosByCategory = async (produtoCategoria: string) => {
            const response = await fetch(`http://localhost:8080/api/produtos?categoria=${produtoCategoria}`);
            const produtosData = await response.json();
            setProdutos(produtosData);
        }

        if (produtoNome) {
            handleFetchProdutosByName(produtoNome);
        } else if (produtoCategoria) {
            handleFetchProdutosByCategory(produtoCategoria);
        } else {
            handleFetchProdutos()
        }

    }, [produtoNome, produtoCategoria]);

    return (
        <main className="container mx-auto min-h-screen bg-[#F9FAFB] px-4 pt-6 max-w-6xl">

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

        </main>
    );

}
