export default function FeaturesComp() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl shadow bg-gray-50">
                    <h3 className="text-xl font-semibold mb-2">Organização</h3>
                    <p className="text-gray-600">Tenha todos os seus produtos listados de forma prática.</p>
                </div>
                <div className="p-6 rounded-xl shadow bg-gray-50">
                    <h3 className="text-xl font-semibold mb-2">Monitoramento</h3>
                    <p className="text-gray-600">Acompanhe a quantidade de itens em estoque em tempo real.</p>
                </div>
                <div className="p-6 rounded-xl shadow bg-gray-50">
                    <h3 className="text-xl font-semibold mb-2">Relatórios</h3>
                    <p className="text-gray-600">Gere insights rápidos para tomar decisões melhores.</p>
                </div>
            </div>
        </section>
    )
}