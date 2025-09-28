export default function HeaderComp(){
    return(
        <header className="bg-[#2F80ED] text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">MeuEstoque</h1>
            <nav className="space-x-6">
              <a href="#" className="hover:underline">Início</a>
              <a href="#" className="hover:underline">Produtos</a>
              <a href="#" className="hover:underline">Sobre</a>
            </nav>
          </div>
        </header>
    )
}