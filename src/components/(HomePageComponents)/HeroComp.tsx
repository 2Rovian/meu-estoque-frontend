export default function HeaderComp() {
    return (
        <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Controle seu estoque de forma simples
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
                O <span className="font-semibold text-[#2F80ED]">MeuEstoque</span> ajuda você a organizar, monitorar e gerenciar produtos em tempo real.
            </p>
            <div className="space-x-4">
                <button className="bg-[#2F80ED] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1C64D1]">
                    Começar agora
                </button>
                <button className="bg-white text-[#2F80ED] border border-[#2F80ED] px-6 py-3 rounded-lg shadow hover:bg-[#EBF4FF]">
                    Ver produtos
                </button>
            </div>
        </section>
    )
}