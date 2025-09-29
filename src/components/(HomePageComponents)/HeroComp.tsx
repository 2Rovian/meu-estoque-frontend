import { Link } from "react-router-dom";

export default function HeaderComp() {
    return (
        <section className="flex flex-col items-center justify-center  text-center px-6 my-6 md:my-28">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Controle seu estoque de forma simples
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
                O <span className="font-semibold text-[#2F80ED]">MeuEstoque</span> ajuda você a organizar, monitorar e gerenciar produtos em tempo real.
            </p>
            <div className="space-x-4">
                <Link to={'/produtos'}>
                    <button className="bg-[#2F80ED] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1C64D1] duration-200 ease-in-out cursor-pointer">
                        Começar agora
                    </button>
                </Link>
                <Link to={'/produtos'}>
                    <button className="bg-white text-[#2F80ED] border border-[#2F80ED] px-6 py-3 rounded-lg shadow hover:bg-[#EBF4FF] cursor-pointer">
                        Ver produtos
                    </button>
                </Link>
            </div>
        </section>
    )
}