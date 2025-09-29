import AddProductComp from "../components/(ProductsPageComponents)/AddProductComp";
import TabelProductsComp from "../components/(ProductsPageComponents)/TabelProductsComp";

export default function ProductsPage() {
    
    return (
        <main className="container mx-auto min-h-screen bg-[#F9FAFB] px-4 pt-6">
            
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#111827]">Produtos</h1>
                <p className="text-[#6B7280]">Gerencie os produtos cadastrados no estoque.</p>
            </div>

            <AddProductComp />

            <TabelProductsComp />
        </main>
    );

}
