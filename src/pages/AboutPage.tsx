export default function AboutPage() {
    return (
        <div className="container px-4 py-8 mx-auto max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre MeuEstoque</h1>
            <p className="text-gray-600 mb-6">
                MeuEstoque é um projeto pessoal criado para praticar CRUD usando Java Spring no back-end
                e React no front-end. É um espaço para experimentar funcionalidades, aprender e testar
                ideias sem compromisso profissional.
            </p>

            <section className="bg-gray-100 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">O que estou estudando aqui</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>CRUD completo com Spring Boot e REST API</li>
                    <li>Integração front-end React com back-end Java</li>
                    <li>Noções de SQL com postgres</li>
                    <li>Migrations com flyway</li>
                    <li>O ambinete spring no geral(controllers, repositories, entities, services, JpaRepository, etc)</li>
                    <li>Gerenciamento de estado no React</li>
                    <li>Estilização com Tailwind CSS</li>
                    <li>Boas práticas de código e organização de projeto</li>
                </ul>
            </section>

            <p className="text-gray-700">
                É um projeto para **aprender na prática**, sem grandes pretensões. Se você está curioso,
                sinta-se à vontade para explorar o código ou usar como referência para seus estudos.
            </p>
            <p className="my-2">Sinta-se à vontade para ver meus outros projetos: no <span className="text-[#1C64D1] hover:underline"><a target="_blank" href="https://github.com/2Rovian">GitHub</a></span></p>
        </div>
    )
}